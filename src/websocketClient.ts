import { VaultApi } from "./vaultApi";
import { CommandRequest, CommandResponse } from "./types";
import { Notice, App } from "obsidian";
import { t } from "./i18n";

export type ConnectionStatus = "connecting" | "connected" | "disconnected" | "auth-error";

export class WebSocketClient {

  private ws: WebSocket | null = null;
  private running = false;
  private reconnectTimer: number | null = null;
  private sessionReplaced = false;

  // Chemins des fichiers modifiés par une commande distante en cours.
  // Permet d'ignorer l'event vault "modify" qu'elles génèrent et d'éviter une boucle de sync.
  public updatingFiles: string[] = [];

  // Requêtes plugin → serveur en attente de réponse, indexées par UUID.
  // Chaque entrée est résolue ou rejetée à réception du message correspondant (même id).
  private pendingRequests = new Map<
    string,
    {
      resolve: (value: unknown) => void;
      reject: (reason?: unknown) => void;
      timeout: number;
    }
  >();

  constructor(
    private vaultApi: VaultApi,
    private url: string,
    private app: App,
    private token?: string,
    private onStatusChange?: (status: ConnectionStatus) => void,
    private onSessionReplaced?: () => void,
    private debugLog?: (...args: unknown[]) => void,
  ) { }

  start() {
    this.running = true;
    this.sessionReplaced = false;
    this.connect();
  }

  stop() {
    this.running = false;

    if (this.reconnectTimer !== null) {
      window.clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.rejectPendingRequests(t("errWsClosed"));
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  private connect(): void {
    this.debugLog?.(t("debugConnecting"), this.url);
    this.onStatusChange?.("connecting");
    const ws = new WebSocket(this.url);
    this.ws = ws;

    ws.onopen = () => {
      this.debugLog?.(t("debugSocketOpen"));
      if (this.token) {
        this.debugLog?.(t("debugSendAuth"));
        ws.send(JSON.stringify({ type: "auth", token: this.token }));
      } else {
        this.onStatusChange?.("connected");
      }
    };

    ws.onmessage = async (event: MessageEvent) => {
      try {
        const raw = typeof event.data === "string" ? event.data : String(event.data);
        const parsed: unknown = JSON.parse(raw);
        this.debugLog?.("↓", parsed);

        if (typeof parsed !== "object" || parsed === null) {
          throw new Error(t("errInvalidMessage"));
        }
        const msg = parsed as Record<string, unknown>;

        if (msg.type === "auth.ok") {
          this.debugLog?.(t("debugAuthOk"));
          this.onStatusChange?.("connected");
          return;
        }

        if (msg.type === "auth.error") {
          console.error("[WS] authentification échouée:", msg.error);
          this.onStatusChange?.("auth-error");
          return;
        }

        if (msg.type === "session.replaced") {
          console.warn("[WS] session remplacée par une autre connexion");
          this.sessionReplaced = true;
          this.running = false;
          return;
        }

        // Réponse à une requête initiée par le plugin (pattern request/response via id).
        if (typeof msg.id === "string" && this.pendingRequests.has(msg.id)) {
          const pending = this.pendingRequests.get(msg.id)!;
          window.clearTimeout(pending.timeout);
          this.pendingRequests.delete(msg.id);

          if (msg.ok === false) {
            pending.reject(new Error(typeof msg.error === "string" ? msg.error : t("errUnknown")));
            return;
          }

          pending.resolve(msg);
          return;
        }

        // Commande entrante initiée par le serveur.
        const command = this.parseCommand(msg);
        const response = await this.executeCommand(command);
        this.debugLog?.("↑", response);
        ws.send(JSON.stringify(response));
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        new Notice(t("noticeMessageError", { message }), 8000);
        ws.send(JSON.stringify({ id: "unknown", ok: false, error: message }));
      }
    };

    ws.onerror = () => {
      console.error("[WS] erreur websocket");
    };

    ws.onclose = () => {
      console.warn("[WS] connexion fermée");
      this.rejectPendingRequests(t("errWsConnClosed"));
      if (this.sessionReplaced) {
        this.onStatusChange?.("disconnected");
        this.onSessionReplaced?.();
        return;
      }
      this.onStatusChange?.("disconnected");
      if (this.running) {
        this.debugLog?.(t("debugReconnecting"));
        this.reconnectTimer = window.setTimeout(() => this.connect(), 3000);
      }
    };
  }

  private rejectPendingRequests(reason: string): void {
    for (const [id, pending] of this.pendingRequests.entries()) {
      window.clearTimeout(pending.timeout);
      pending.reject(new Error(reason));
      this.pendingRequests.delete(id);
    }
  }

  private generateRequestId(): string {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  public async saveNote(payload: {
    path: string;
    IdNote: string;
    contentLines: string[];
    metadata: {
      createdAt: string;
      modifiedAt: string;
      createdAtMs: number;
      modifiedAtMs: number;
    };
  }): Promise<unknown> {
    return this.request("note.saved", payload);
  }

  public async getNoteId(): Promise<string> {
    const response = await this.request("note.getId");

    if (typeof response !== "object" || response === null) {
      throw new Error(t("errInvalidResponseGetId"));
    }

    const result = (response as Record<string, unknown>).result;
    if (typeof result !== "object" || result === null) {
      throw new Error(t("errInvalidResultGetId"));
    }

    const idNote = (result as Record<string, unknown>).idNote;
    if (typeof idNote !== "string" || !idNote.trim()) {
      throw new Error(t("errMissingIdNote"));
    }

    return idNote;
  }

  public async request(type: string, payload?: Record<string, unknown>): Promise<unknown> {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      throw new Error(t("errWsNotConnected"));
    }

    const id = this.generateRequestId();

    return new Promise((resolve, reject) => {
      const timeout = window.setTimeout(() => {
        this.pendingRequests.delete(id);
        reject(new Error(t("errWsTimeout", { type })));
      }, 10000);

      const message = { id, type, ...(payload ?? {}) };
      this.pendingRequests.set(id, { resolve, reject, timeout });
      this.debugLog?.("↑", message);
      this.ws!.send(JSON.stringify(message));
    });
  }

  private parseCommand(value: unknown): CommandRequest {
    if (typeof value !== "object" || value === null) {
      throw new Error(t("errInvalidMessage"));
    }

    const obj = value as Record<string, unknown>;

    if (typeof obj.id !== "string") {
      throw new Error(t("errMissingId"));
    }

    if (obj.type === "check") {
      return { id: obj.id, type: "check" };
    }

    if (obj.type === "note.read") {
      if (typeof obj.path !== "string") throw new Error(t("errMissingPath", { type: "note.read" }));
      return { id: obj.id, type: "note.read", path: obj.path };
    }

    if (obj.type === "note.create") {
      if (typeof obj.path !== "string") throw new Error(t("errMissingPath", { type: "note.create" }));
      if (!Array.isArray(obj.content)) throw new Error(t("errMissingContent", { type: "note.create" }));
      return { id: obj.id, type: "note.create", path: obj.path, content: obj.content as string[] };
    }

    if (obj.type === "note.replace") {
      if (typeof obj.path !== "string") throw new Error(t("errMissingPath", { type: "note.replace" }));
      if (!Array.isArray(obj.content)) throw new Error(t("errMissingContent", { type: "note.replace" }));
      return { id: obj.id, type: "note.replace", path: obj.path, content: obj.content as string[] };
    }

    if (obj.type === "note.move") {
      if (typeof obj.path !== "string" || typeof obj.newPath !== "string") {
        throw new Error(t("errMissingPath", { type: "note.move" }));
      }
      return { id: obj.id, type: "note.move", path: obj.path, newPath: obj.newPath };
    }

    if (obj.type === "note.findByProperty") {
      if (typeof obj.property !== "string") throw new Error(t("errMissingProperty"));
      const val = obj.value;
      if (typeof val !== "string" && typeof val !== "number" && typeof val !== "boolean") {
        throw new Error(t("errInvalidValue"));
      }
      return { id: obj.id, type: "note.findByProperty", property: obj.property, value: val };
    }

    if (obj.type === "note.open") {
      if (typeof obj.path !== "string") throw new Error(t("errMissingPath", { type: "note.open" }));
      return { id: obj.id, type: "note.open", path: obj.path };
    }

    throw new Error(t("errUnknownCommand", { type: String(obj.type) }));
  }

  private async executeCommand(command: CommandRequest): Promise<CommandResponse> {
    try {
      switch (command.type) {
        case "check":
          return { id: command.id, ok: true, result: true };

        case "note.read": {
          const result = await this.vaultApi.readNote(command.path);
          return { id: command.id, ok: true, result };
        }

        case "note.create": {
          this.updatingFiles.push(command.path);
          window.setTimeout(() => this.updatingFiles.remove(command.path), 3000);
          const result = await this.vaultApi.createNote(command.path, command.content);
          return { id: command.id, ok: true, result };
        }

        case "note.move": {
          this.updatingFiles.push(command.newPath);
          window.setTimeout(() => this.updatingFiles.remove(command.newPath), 3000);
          const result = await this.vaultApi.moveNote(command.path, command.newPath);
          return { id: command.id, ok: true, result };
        }

        case "note.replace": {
          this.updatingFiles.push(command.path);
          window.setTimeout(() => this.updatingFiles.remove(command.path), 3000);
          const result = await this.vaultApi.replaceNote(command.path, command.content);
          return { id: command.id, ok: true, result };
        }

        case "note.findByProperty": {
          const result = this.vaultApi.findByProperty(command.property, command.value);
          if (!result) return { id: command.id, ok: false, error: "Not found" };
          return { id: command.id, ok: true, result };
        }

        case "note.open": {
          const result = await this.vaultApi.openNote(command.path);
          return { id: command.id, ok: true, result };
        }
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      new Notice(t("noticeCommandFailed", { type: command.type, message }), 8000);
      return { id: command.id, ok: false, error: message };
    }
  }
}
