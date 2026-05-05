var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => GTCSyncPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian4 = require("obsidian");

// src/vaultApi.ts
var import_obsidian = require("obsidian");

// src/i18n.ts
var fr = {
  // Statut de connexion
  statusConnecting: "GTC-Sync : Connexion en cours\u2026",
  statusConnected: "GTC-Sync : Connect\xE9",
  statusDisconnected: "GTC-Sync : D\xE9connect\xE9 (reconnexion auto)",
  statusAuthError: "GTC-Sync : Erreur d'authentification",
  // Ribbon & menus
  ribbonQuickNote: "Cr\xE9er une note rapide",
  menuCreateQuickNote: "Cr\xE9er une note rapide",
  menuSendToQuickNote: "Envoyer dans note rapide",
  // Commandes
  cmdCreateQuickNote: "Cr\xE9er une note rapide",
  cmdConnectWebSocket: "Connect WebSocket",
  cmdDisconnectWebSocket: "Disconnect WebSocket",
  // Modales
  modalDisconnectedTitle: "GTC-Sync : D\xE9connect\xE9",
  modalDisconnectedMessage: "Le plugin n'est pas connect\xE9 au serveur GTC-Sync.\nLes modifications ne seront pas synchronis\xE9es.",
  modalSessionReplacedTitle: "GTC-Sync : Attention",
  modalSessionReplacedMessage: "La connexion a \xE9t\xE9 ferm\xE9e car une autre session GTC-Sync vient de se connecter.",
  modalSaveErrorTitle: "GTC-Sync : Attention",
  modalNoteReservedMessage: "La note est r\xE9serv\xE9e par un autre utilisateur,\nles modifications peuvent \xEAtre perdues !",
  modalNoteUnexistingMessage: "Cette note n'existe plus.",
  modalErrorMessage: "Erreur {code} : {message}",
  // Boutons
  btnReconnect: "Reconnecter",
  // Notices
  noteSynced: "La note a \xE9t\xE9 synchronis\xE9e.",
  noticeQuickNoteCreated: "Note rapide cr\xE9\xE9e : {path}",
  noticeQuickNoteFailed: "Impossible de cr\xE9er la note rapide : {message}",
  noticeSendToQuickNoteFailed: "Impossible de synchroniser la note rapide : {message}",
  noticeWsConnected: "WebSocket connect\xE9",
  noticeWsDisconnected: "WebSocket d\xE9connect\xE9",
  noticeSyncFailed: "GTC-Sync : \xE9chec de la synchronisation \u2014 {message}",
  noticeMessageError: "GTC-Sync : erreur de traitement du message \u2014 {message}",
  noticeCommandFailed: "GTC-Sync : \xE9chec de {type} \u2014 {message}",
  // Paramètres
  settingsUrlName: "WebSocket URL",
  settingsUrlDesc: "Adresse du serveur WebSocket",
  settingsTokenName: "WebSocket token",
  settingsTokenDesc: "Token envoy\xE9 au serveur apr\xE8s connexion",
  settingsAutoConnectName: "Auto connect",
  settingsAutoConnectDesc: "Se reconnecter automatiquement au chargement du plugin",
  settingsDebugName: "Mode debug",
  settingsDebugDesc: "Affiche les logs d\xE9taill\xE9s dans la console du d\xE9veloppeur (F12)",
  // Debug
  debugConnecting: "connexion \xE0",
  debugSocketOpen: "socket ouverte",
  debugSendAuth: "envoi auth",
  debugAuthOk: "authentification OK",
  debugReconnecting: "reconnexion dans 3 s",
  // Erreurs
  errWsNotInit: "WebSocket non initialis\xE9",
  errWsClosed: "WebSocket ferm\xE9",
  errWsConnClosed: "Connexion WebSocket ferm\xE9e",
  errWsNotConnected: "WebSocket non connect\xE9",
  errWsTimeout: "Timeout en attente de r\xE9ponse pour {type}",
  errInvalidResponseGetId: "R\xE9ponse invalide pour note.getId",
  errInvalidResultGetId: "R\xE9sultat invalide pour note.getId",
  errMissingIdNote: "idNote manquant dans la r\xE9ponse",
  errInvalidResponseSave: "R\xE9ponse invalide pour note.saved",
  errInvalidResultSave: "R\xE9sultat invalide pour note.saved",
  errUnknown: "Erreur inconnue",
  errInvalidMessage: "Message invalide : objet attendu",
  errMissingId: "Message invalide : id manquant",
  errMissingPath: "{type} : path manquant",
  errMissingContent: "{type} : content manquant",
  errMissingProperty: "note.findByProperty : property manquant",
  errInvalidValue: "note.findByProperty : value invalide",
  errUnknownCommand: "Type de commande inconnu : {type}",
  errFileNotFound: "Fichier introuvable : {path}",
  errFileAlreadyExists: "Le fichier existe d\xE9j\xE0 : {path}",
  errEmptyNoteName: "Nom de note vide",
  errNoteNotFound: "Note introuvable : {name}",
  errMultipleNotes: "Plusieurs notes portent ce nom : {name} ({paths})"
};
var en = {
  // Connection status
  statusConnecting: "GTC-Sync: Connecting\u2026",
  statusConnected: "GTC-Sync: Connected",
  statusDisconnected: "GTC-Sync: Disconnected (auto-reconnect)",
  statusAuthError: "GTC-Sync: Authentication error",
  // Ribbon & menus
  ribbonQuickNote: "Create quick note",
  menuCreateQuickNote: "Create quick note",
  menuSendToQuickNote: "Send to quick note",
  // Commands
  cmdCreateQuickNote: "Create quick note",
  cmdConnectWebSocket: "Connect WebSocket",
  cmdDisconnectWebSocket: "Disconnect WebSocket",
  // Modals
  modalDisconnectedTitle: "GTC-Sync: Disconnected",
  modalDisconnectedMessage: "The plugin is not connected to the GTC-Sync server.\nChanges will not be synchronized.",
  modalSessionReplacedTitle: "GTC-Sync: Warning",
  modalSessionReplacedMessage: "The connection was closed because another GTC-Sync session just connected.",
  modalSaveErrorTitle: "GTC-Sync: Warning",
  modalNoteReservedMessage: "This note is reserved by another user,\nchanges may be lost!",
  modalNoteUnexistingMessage: "This note does not exist anymore.",
  modalErrorMessage: "Error {code}: {message}",
  // Buttons
  btnReconnect: "Reconnect",
  // Notices
  noteSynced: "Note synchronized.",
  noticeQuickNoteCreated: "Quick note created: {path}",
  noticeQuickNoteFailed: "Could not create quick note: {message}",
  noticeSendToQuickNoteFailed: "Could not link quick note: {message}",
  noticeWsConnected: "WebSocket connected",
  noticeWsDisconnected: "WebSocket disconnected",
  noticeSyncFailed: "GTC-Sync: sync failed \u2014 {message}",
  noticeMessageError: "GTC-Sync: message processing error \u2014 {message}",
  noticeCommandFailed: "GTC-Sync: {type} failed \u2014 {message}",
  // Settings
  settingsUrlName: "WebSocket URL",
  settingsUrlDesc: "WebSocket server address",
  settingsTokenName: "WebSocket token",
  settingsTokenDesc: "Token sent to the server after connecting",
  settingsAutoConnectName: "Auto connect",
  settingsAutoConnectDesc: "Automatically connect when the plugin loads",
  settingsDebugName: "Debug mode",
  settingsDebugDesc: "Show detailed logs in the developer console (F12)",
  // Debug
  debugConnecting: "connecting to",
  debugSocketOpen: "socket open",
  debugSendAuth: "sending auth",
  debugAuthOk: "authentication OK",
  debugReconnecting: "reconnecting in 3 s",
  // Errors
  errWsNotInit: "WebSocket not initialized",
  errWsClosed: "WebSocket closed",
  errWsConnClosed: "WebSocket connection closed",
  errWsNotConnected: "WebSocket not connected",
  errWsTimeout: "Timeout waiting for response to {type}",
  errInvalidResponseGetId: "Invalid response for note.getId",
  errInvalidResultGetId: "Invalid result for note.getId",
  errMissingIdNote: "idNote missing from response",
  errInvalidResponseSave: "Invalid response for note.saved",
  errInvalidResultSave: "Invalid result for note.saved",
  errUnknown: "Unknown error",
  errInvalidMessage: "Invalid message: object expected",
  errMissingId: "Invalid message: missing id",
  errMissingPath: "{type}: missing path",
  errMissingContent: "{type}: missing content",
  errMissingProperty: "note.findByProperty: missing property",
  errInvalidValue: "note.findByProperty: invalid value",
  errUnknownCommand: "Unknown command type: {type}",
  errFileNotFound: "File not found: {path}",
  errFileAlreadyExists: "File already exists: {path}",
  errEmptyNoteName: "Empty note name",
  errNoteNotFound: "Note not found: {name}",
  errMultipleNotes: "Multiple notes share this name: {name} ({paths})"
};
var translations = { fr, en };
function detectLang() {
  const locale = window.moment?.locale?.() ?? navigator.language ?? "en";
  return locale.startsWith("fr") ? "fr" : "en";
}
function t(key, vars) {
  const dict = translations[detectLang()];
  let str = dict[key];
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(`{${k}}`, v);
    }
  }
  return str;
}

// src/vaultApi.ts
var VaultApi = class {
  constructor(app) {
    this.app = app;
  }
  getFileByPath(path) {
    const file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof import_obsidian.TFile)) {
      throw new Error(t("errFileNotFound", { path }));
    }
    return file;
  }
  async readNote(path) {
    const file = this.getFileByPath(path);
    const content = (await this.app.vault.read(file)).split("\n");
    return {
      path,
      content,
      metadata: {
        createdAt: new Date(file.stat.ctime).toISOString(),
        modifiedAt: new Date(file.stat.mtime).toISOString(),
        createdAtMs: file.stat.ctime,
        modifiedAtMs: file.stat.mtime
      }
    };
  }
  async createNote(path, content) {
    if (this.app.vault.getAbstractFileByPath(path)) {
      throw new Error(t("errFileAlreadyExists", { path }));
    }
    await this.app.vault.create(path, this.clearText(content.join("\n")));
    return { path };
  }
  async moveNote(path, newPath) {
    const file = this.getFileByPath(path);
    await this.app.fileManager.renameFile(file, newPath);
    return { path };
  }
  async replaceNote(path, content) {
    const file = this.getFileByPath(path);
    await this.app.vault.modify(file, this.clearText(content.join("\n")));
    return { path };
  }
  async openNote(name) {
    const normalizedName = name.trim().toLowerCase();
    if (!normalizedName) {
      throw new Error(t("errEmptyNoteName"));
    }
    const matches = this.app.vault.getMarkdownFiles().filter((f) => {
      const basename = f.basename.trim().toLowerCase();
      const filename = f.name.trim().toLowerCase();
      const path = f.path.trim().toLowerCase();
      return basename === normalizedName || filename === normalizedName || path === normalizedName + ".md";
    });
    if (matches.length === 0) {
      throw new Error(t("errNoteNotFound", { name }));
    }
    if (matches.length > 1) {
      throw new Error(t("errMultipleNotes", { name, paths: matches.map((f) => f.path).join(", ") }));
    }
    await this.app.workspace.getLeaf(true).openFile(matches[0]);
    return { path: matches[0].path };
  }
  findByProperty(property, value) {
    for (const file of this.app.vault.getMarkdownFiles()) {
      const cache = this.app.metadataCache.getFileCache(file);
      const frontmatter = cache?.frontmatter;
      if (!frontmatter) continue;
      const frontmatterValue = frontmatter[property];
      if (frontmatterValue == value || String(frontmatterValue) === String(value)) {
        return {
          path: file.path,
          properties: frontmatter
        };
      }
    }
    return null;
  }
  clearText(text) {
    return text.replace("\\t", "	");
  }
};

// src/websocketClient.ts
var import_obsidian2 = require("obsidian");
var WebSocketClient = class {
  constructor(vaultApi, url, app, token, onStatusChange, onSessionReplaced, debugLog) {
    this.vaultApi = vaultApi;
    this.url = url;
    this.app = app;
    this.token = token;
    this.onStatusChange = onStatusChange;
    this.onSessionReplaced = onSessionReplaced;
    this.debugLog = debugLog;
    this.ws = null;
    this.running = false;
    this.reconnectTimer = null;
    this.sessionReplaced = false;
    // Chemins des fichiers modifiés par une commande distante en cours.
    // Permet d'ignorer l'event vault "modify" qu'elles génèrent et d'éviter une boucle de sync.
    this.updatingFiles = [];
    // Requêtes plugin → serveur en attente de réponse, indexées par UUID.
    // Chaque entrée est résolue ou rejetée à réception du message correspondant (même id).
    this.pendingRequests = /* @__PURE__ */ new Map();
  }
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
  connect() {
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
    ws.onmessage = async (event) => {
      try {
        const raw = typeof event.data === "string" ? event.data : String(event.data);
        const parsed = JSON.parse(raw);
        this.debugLog?.("\u2193", parsed);
        if (parsed.type === "auth.ok") {
          this.debugLog?.(t("debugAuthOk"));
          this.onStatusChange?.("connected");
          return;
        }
        if (parsed.type === "auth.error") {
          console.error("[WS] authentification \xE9chou\xE9e:", parsed.error);
          this.onStatusChange?.("auth-error");
          return;
        }
        if (parsed.type === "session.replaced") {
          console.warn("[WS] session remplac\xE9e par une autre connexion");
          this.sessionReplaced = true;
          this.running = false;
          return;
        }
        if (typeof parsed.id === "string" && this.pendingRequests.has(parsed.id)) {
          const pending = this.pendingRequests.get(parsed.id);
          window.clearTimeout(pending.timeout);
          this.pendingRequests.delete(parsed.id);
          if (parsed.ok === false) {
            pending.reject(new Error(typeof parsed.error === "string" ? parsed.error : t("errUnknown")));
            return;
          }
          pending.resolve(parsed);
          return;
        }
        const command = this.parseCommand(parsed);
        const response = await this.executeCommand(command);
        this.debugLog?.("\u2191", response);
        ws.send(JSON.stringify(response));
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        new import_obsidian2.Notice(t("noticeMessageError", { message }), 8e3);
        ws.send(JSON.stringify({ id: "unknown", ok: false, error: message }));
      }
    };
    ws.onerror = () => {
      console.error("[WS] erreur websocket");
    };
    ws.onclose = () => {
      console.warn("[WS] connexion ferm\xE9e");
      this.rejectPendingRequests(t("errWsConnClosed"));
      if (this.sessionReplaced) {
        this.onStatusChange?.("disconnected");
        this.onSessionReplaced?.();
        return;
      }
      this.onStatusChange?.("disconnected");
      if (this.running) {
        this.debugLog?.(t("debugReconnecting"));
        this.reconnectTimer = window.setTimeout(() => this.connect(), 3e3);
      }
    };
  }
  rejectPendingRequests(reason) {
    for (const [id, pending] of this.pendingRequests.entries()) {
      window.clearTimeout(pending.timeout);
      pending.reject(new Error(reason));
      this.pendingRequests.delete(id);
    }
  }
  generateRequestId() {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
  async saveNote(payload) {
    return this.request("note.saved", payload);
  }
  async getNoteId() {
    const response = await this.request("note.getId");
    if (typeof response !== "object" || response === null) {
      throw new Error(t("errInvalidResponseGetId"));
    }
    const result = response.result;
    if (typeof result !== "object" || result === null) {
      throw new Error(t("errInvalidResultGetId"));
    }
    const idNote = result.idNote;
    if (typeof idNote !== "string" || !idNote.trim()) {
      throw new Error(t("errMissingIdNote"));
    }
    return idNote;
  }
  async request(type, payload) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      throw new Error(t("errWsNotConnected"));
    }
    const id = this.generateRequestId();
    return new Promise((resolve, reject) => {
      const timeout = window.setTimeout(() => {
        this.pendingRequests.delete(id);
        reject(new Error(t("errWsTimeout", { type })));
      }, 1e4);
      const message = { id, type, ...payload ?? {} };
      this.pendingRequests.set(id, { resolve, reject, timeout });
      this.debugLog?.("\u2191", message);
      this.ws.send(JSON.stringify(message));
    });
  }
  parseCommand(value) {
    if (typeof value !== "object" || value === null) {
      throw new Error(t("errInvalidMessage"));
    }
    const obj = value;
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
      return { id: obj.id, type: "note.create", path: obj.path, content: obj.content };
    }
    if (obj.type === "note.replace") {
      if (typeof obj.path !== "string") throw new Error(t("errMissingPath", { type: "note.replace" }));
      if (!Array.isArray(obj.content)) throw new Error(t("errMissingContent", { type: "note.replace" }));
      return { id: obj.id, type: "note.replace", path: obj.path, content: obj.content };
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
  async executeCommand(command) {
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
          window.setTimeout(() => this.updatingFiles.remove(command.path), 3e3);
          const result = await this.vaultApi.createNote(command.path, command.content);
          return { id: command.id, ok: true, result };
        }
        case "note.move": {
          this.updatingFiles.push(command.newPath);
          window.setTimeout(() => this.updatingFiles.remove(command.newPath), 3e3);
          const result = await this.vaultApi.moveNote(command.path, command.newPath);
          return { id: command.id, ok: true, result };
        }
        case "note.replace": {
          this.updatingFiles.push(command.path);
          window.setTimeout(() => this.updatingFiles.remove(command.path), 3e3);
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
      new import_obsidian2.Notice(t("noticeCommandFailed", { type: command.type, message }), 8e3);
      return { id: command.id, ok: false, error: message };
    }
  }
};

// src/alertModal.ts
var import_obsidian3 = require("obsidian");
var _AlertModal = class _AlertModal extends import_obsidian3.Modal {
  constructor(app, title, message, variant = "warning", action, onCloseCallback) {
    super(app);
    this.title = title;
    this.message = message;
    this.variant = variant;
    this.action = action;
    this.onCloseCallback = onCloseCallback;
    _AlertModal.nbinstances += 1;
  }
  destroy() {
    _AlertModal.nbinstances -= 1;
  }
  onOpen() {
    const { contentEl, titleEl } = this;
    titleEl.setText(this.title);
    contentEl.empty();
    contentEl.addClass("gtc-alert");
    contentEl.addClass(`gtc-alert--${this.variant}`);
    const body = contentEl.createDiv({ cls: "gtc-alert__body" });
    const iconEl = body.createDiv({ cls: "gtc-alert__icon" });
    (0, import_obsidian3.setIcon)(iconEl, this.variant === "error" ? "alert-circle" : "alert-triangle");
    body.createDiv({
      cls: "gtc-alert__message",
      text: this.message
    });
    const buttonRow = contentEl.createDiv({ cls: "gtc-alert__buttons" });
    if (this.action) {
      const action = this.action;
      const actionButton = buttonRow.createEl("button", {
        text: action.label,
        cls: "mod-cta"
      });
      actionButton.addEventListener("click", () => {
        this.close();
        action.onClick();
      });
    }
    const okButton = buttonRow.createEl("button", { text: "OK" });
    okButton.addEventListener("click", () => this.close());
  }
  onClose() {
    this.contentEl.empty();
    this.onCloseCallback?.();
  }
};
_AlertModal.nbinstances = 0;
var AlertModal = _AlertModal;

// src/main.ts
var DEFAULT_SETTINGS = {
  websocketUrl: "ws://127.0.0.1:8080",
  websocketToken: "",
  autoConnect: true,
  debug: false
};
var LOCAL_SETTINGS_KEY = "gtc-sync-plugin-local-settings";
var GTCSyncPlugin = class extends import_obsidian4.Plugin {
  constructor() {
    super(...arguments);
    this.wsClient = null;
    this.activeFileTimer = null;
    this.currentStatus = "disconnected";
    this.disconnectedModalOpen = false;
  }
  debugLog(...args) {
    if (this.settings.debug)
      console.error("[GTC-Sync]", ...args);
  }
  setConnectionStatus(status) {
    if (status === "disconnected" && this.currentStatus === "auth-error") {
      return;
    }
    const icons = {
      connecting: "loader",
      connected: "wifi",
      disconnected: "wifi-off",
      "auth-error": "shield-off"
    };
    const tooltips = {
      connecting: t("statusConnecting"),
      connected: t("statusConnected"),
      disconnected: t("statusDisconnected"),
      "auth-error": t("statusAuthError")
    };
    this.statusBarEl.setText("Gtc Sync : \u25CF");
    this.statusBarEl.title = tooltips[status];
    this.statusBarEl.setAttribute("data-gtc-status", status);
    (0, import_obsidian4.setIcon)(this.ribbonStatusEl, icons[status]);
    this.ribbonStatusEl.title = tooltips[status];
    this.ribbonStatusEl.setAttribute("data-gtc-status", status);
    this.currentStatus = status;
  }
  showDisconnectedModal() {
    if (this.disconnectedModalOpen) return;
    this.disconnectedModalOpen = true;
    new AlertModal(
      this.app,
      t("modalDisconnectedTitle"),
      t("modalDisconnectedMessage"),
      "warning",
      {
        label: t("btnReconnect"),
        onClick: () => this.startWebSocket()
      },
      () => {
        this.disconnectedModalOpen = false;
      }
    ).open();
  }
  onSessionReplaced() {
    new AlertModal(
      this.app,
      t("modalSessionReplacedTitle"),
      t("modalSessionReplacedMessage"),
      "warning",
      {
        label: t("btnReconnect"),
        onClick: () => this.startWebSocket()
      }
    ).open();
  }
  async onload() {
    this.loadSettings();
    this.vaultApi = new VaultApi(this.app);
    this.statusBarEl = this.addStatusBarItem();
    this.statusBarEl.addClass("gtc-sync-status");
    this.ribbonStatusEl = this.addRibbonIcon("wifi-off", t("statusDisconnected"), () => {
    });
    this.ribbonStatusEl.addClass("gtc-sync-ribbon-status");
    this.setConnectionStatus("disconnected");
    this.addSettingTab(new GTCSyncPluginSettingTab(this.app, this));
    this.addRibbonIcon("square-pen", t("ribbonQuickNote"), async () => {
      await this.createQuickNote();
    });
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        menu.addItem((item) => {
          item.setTitle(t("menuCreateQuickNote")).setIcon("square-pen").onClick(async () => {
            await this.createQuickNote(file);
          });
        });
      })
    );
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        menu.addItem((item) => {
          item.setTitle(t("menuSendToQuickNote")).setIcon("send").onClick(async () => {
            await this.sendToQuickNote(file);
          });
        });
      })
    );
    this.registerEvent(
      this.app.workspace.on("file-open", (file) => {
        if (!file || file.extension !== "md") return;
        if (this.currentStatus === "connected") return;
        const cache = this.app.metadataCache.getFileCache(file);
        const idNote = cache?.frontmatter?.["IdNote"];
        if (!idNote) return;
        this.showDisconnectedModal();
      })
    );
    this.registerEvent(
      this.app.vault.on("rename", (file) => {
        if (!(file instanceof import_obsidian4.TFile) || file.extension !== "md") return;
        const serverInitiated = this.wsClient?.updatingFiles.includes(file.path) ?? false;
        window.setTimeout(() => {
          void (async () => {
            if (!serverInitiated) {
              await this.handleFileModified(file);
            }
            const resolvedLinks = this.app.metadataCache.resolvedLinks;
            for (const [sourcePath, targets] of Object.entries(resolvedLinks)) {
              if (!(file.path in targets)) continue;
              const sourceFile = this.app.vault.getAbstractFileByPath(sourcePath);
              if (!(sourceFile instanceof import_obsidian4.TFile)) continue;
              const cache = this.app.metadataCache.getFileCache(sourceFile);
              if (!cache?.frontmatter?.["IdNote"]) continue;
              await this.handleFileModified(sourceFile);
            }
          })();
        }, 500);
      })
    );
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        if (!(file instanceof import_obsidian4.TFile) || file.extension !== "md") return;
        const activeFile = this.app.workspace.getActiveFile();
        if (!activeFile || activeFile.path !== file.path) return;
        if (this.wsClient?.updatingFiles.includes(file.path)) return;
        if (this.activeFileTimer !== null) window.clearTimeout(this.activeFileTimer);
        this.activeFileTimer = window.setTimeout(() => {
          this.activeFileTimer = null;
          void this.handleFileModified(file);
        }, 1e3);
      })
    );
    this.addCommand({
      id: "create-quick-note",
      name: t("cmdCreateQuickNote"),
      callback: async () => {
        await this.createQuickNote();
      }
    });
    this.addCommand({
      id: "connect-websocket",
      name: t("cmdConnectWebSocket"),
      callback: async () => {
        await this.startWebSocket();
        new import_obsidian4.Notice(t("noticeWsConnected"));
      }
    });
    this.addCommand({
      id: "disconnect-websocket",
      name: t("cmdDisconnectWebSocket"),
      callback: async () => {
        await this.stopWebSocket();
        new import_obsidian4.Notice(t("noticeWsDisconnected"));
      }
    });
    if (this.settings.autoConnect) {
      await this.startWebSocket();
    }
  }
  onunload() {
    if (this.activeFileTimer !== null) window.clearTimeout(this.activeFileTimer);
    void this.stopWebSocket();
  }
  async setFrontmatterProperty(file, key, value) {
    await this.app.fileManager.processFrontMatter(file, (fm) => {
      fm[key] = value;
    });
  }
  async sendToQuickNote(target) {
    try {
      if (!(target instanceof import_obsidian4.TFile)) return;
      if (!this.wsClient) {
        throw new Error(t("errWsNotInit"));
      }
      const idNote = await this.wsClient.getNoteId();
      await this.setFrontmatterProperty(target, "IdNote", idNote);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      new import_obsidian4.Notice(t("noticeSendToQuickNoteFailed", { message }), 8e3);
      console.error("[GTCSyncPlugin] sendToQuickNote error:", error);
    }
  }
  async createQuickNote(target) {
    try {
      if (!this.wsClient) {
        throw new Error(t("errWsNotInit"));
      }
      const idNote = await this.wsClient.getNoteId();
      const folderPath = this.resolveQuickNoteFolder(target);
      const fileName = this.buildQuickNoteFileName();
      const fullPath = (0, import_obsidian4.normalizePath)(`${folderPath}/${fileName}`);
      const content = ["---", `IdNote: ${idNote}`, "---", ""].join("\n");
      this.wsClient.updatingFiles.push(fullPath);
      window.setTimeout(() => {
        this.wsClient?.updatingFiles.remove(fullPath);
      }, 2e3);
      const createdFile = await this.app.vault.create(fullPath, content);
      new import_obsidian4.Notice(t("noticeQuickNoteCreated", { path: createdFile.path }));
      await this.app.workspace.getLeaf(true).openFile(createdFile);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      new import_obsidian4.Notice(t("noticeQuickNoteFailed", { message }), 8e3);
      console.error("[GTCSyncPlugin] createQuickNote error:", error);
    }
  }
  resolveQuickNoteFolder(target) {
    if (target instanceof import_obsidian4.TFolder) return target.path;
    if (target instanceof import_obsidian4.TFile) return target.parent?.path ?? "";
    const activeFile = this.app.workspace.getActiveFile();
    if (activeFile instanceof import_obsidian4.TFile) return activeFile.parent?.path ?? "";
    return "";
  }
  buildQuickNoteFileName() {
    const now = /* @__PURE__ */ new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const hh = String(now.getHours()).padStart(2, "0");
    const mi = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    return `Quick Note ${yyyy}-${mm}-${dd} ${hh}-${mi}-${ss}.md`;
  }
  async restartWebSocket() {
    await this.stopWebSocket();
    await this.startWebSocket();
  }
  async handleFileModified(file) {
    try {
      if (!(file instanceof import_obsidian4.TFile) || file.extension !== "md") return;
      const cache = this.app.metadataCache.getFileCache(file);
      const IdNote = cache?.frontmatter?.["IdNote"];
      if (!IdNote) return;
      if (this.currentStatus !== "connected") {
        this.showDisconnectedModal();
        return;
      }
      const content = await this.app.vault.read(file);
      this.debugLog("note.saved \u2192", file.path);
      const response = await this.wsClient?.saveNote({
        path: file.path,
        IdNote,
        contentLines: content.split("\n"),
        metadata: {
          createdAt: new Date(file.stat.ctime).toISOString(),
          modifiedAt: new Date(file.stat.mtime).toISOString(),
          createdAtMs: file.stat.ctime,
          modifiedAtMs: file.stat.mtime
        }
      });
      this.debugLog("note.saved \u2190", response);
      if (typeof response !== "object" || response === null) {
        throw new Error(t("errInvalidResponseSave"));
      }
      const result = response.result;
      if (typeof result !== "object" || result === null) {
        throw new Error(t("errInvalidResultSave"));
      }
      const resultObj = result;
      if (resultObj.Type === "Error") {
        this.debugLog("note.saved \u2190", resultObj);
        switch (String(resultObj.Code)) {
          case "74":
            new AlertModal(
              this.app,
              t("modalSaveErrorTitle"),
              t("modalNoteReservedMessage")
            ).open();
            break;
          case "78":
            new AlertModal(
              this.app,
              t("modalSaveErrorTitle"),
              t("modalNoteUnexistingMessage")
            ).open();
            break;
          default:
            new AlertModal(
              this.app,
              t("modalSaveErrorTitle"),
              t("modalErrorMessage", { code: String(resultObj.Code), message: typeof resultObj.Message === "string" ? resultObj.Message : "" })
            ).open();
        }
        return;
      }
      new import_obsidian4.Notice(t("noteSynced"));
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      new import_obsidian4.Notice(t("noticeSyncFailed", { message }), 8e3);
      console.error("[GTCSyncPlugin] Erreur handleFileModified:", error);
    }
  }
  async startWebSocket() {
    if (this.wsClient) {
      await this.wsClient.stop();
      this.wsClient = null;
    }
    this.wsClient = new WebSocketClient(
      this.vaultApi,
      this.settings.websocketUrl,
      this.app,
      this.settings.websocketToken || void 0,
      (status) => this.setConnectionStatus(status),
      () => this.onSessionReplaced(),
      (...args) => this.debugLog(...args)
    );
    await this.wsClient.start();
  }
  async stopWebSocket() {
    if (this.wsClient) {
      await this.wsClient.stop();
      this.wsClient = null;
    }
  }
  loadSettings() {
    const localData = this.app.loadLocalStorage(LOCAL_SETTINGS_KEY);
    this.settings = Object.assign({}, DEFAULT_SETTINGS, localData ?? {});
  }
  saveSettings() {
    this.app.saveLocalStorage(LOCAL_SETTINGS_KEY, this.settings);
  }
};
var GTCSyncPluginSettingTab = class extends import_obsidian4.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian4.Setting(containerEl).setName(t("settingsUrlName")).setDesc(t("settingsUrlDesc")).addText(
      (text) => text.setPlaceholder("ws://127.0.0.1:8080").setValue(this.plugin.settings.websocketUrl).onChange(async (value) => {
        this.plugin.settings.websocketUrl = value;
        this.plugin.saveSettings();
        await this.plugin.restartWebSocket();
      })
    );
    new import_obsidian4.Setting(containerEl).setName(t("settingsTokenName")).setDesc(t("settingsTokenDesc")).addText(
      (text) => text.setPlaceholder("Token").setValue(this.plugin.settings.websocketToken).onChange(async (value) => {
        this.plugin.settings.websocketToken = value;
        this.plugin.saveSettings();
        await this.plugin.restartWebSocket();
      })
    );
    new import_obsidian4.Setting(containerEl).setName(t("settingsAutoConnectName")).setDesc(t("settingsAutoConnectDesc")).addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.autoConnect).onChange(async (value) => {
        this.plugin.settings.autoConnect = value;
        this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(containerEl).setName(t("settingsDebugName")).setDesc(t("settingsDebugDesc")).addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.debug).onChange(async (value) => {
        this.plugin.settings.debug = value;
        this.plugin.saveSettings();
      })
    );
  }
};
