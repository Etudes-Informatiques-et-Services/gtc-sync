import { App, CachedMetadata, TFile } from "obsidian";
import { t } from "./i18n";

export class VaultApi {
    constructor(private app: App) { }

    getFileByPath(path: string): TFile {
        const file = this.app.vault.getAbstractFileByPath(path);

        if (!(file instanceof TFile)) {
            throw new Error(t("errFileNotFound", { path }));
        }

        return file;
    }

    async readNote(path: string): Promise<{
        path: string;
        content: string[];
        metadata: {
            createdAt: string;
            modifiedAt: string;
            createdAtMs: number;
            modifiedAtMs: number;
        };
    }> {
        const file = this.getFileByPath(path);
        const content = (await this.app.vault.read(file)).split("\n");

        return {
            path,
            content,
            metadata: {
                createdAt: new Date(file.stat.ctime).toISOString(),
                modifiedAt: new Date(file.stat.mtime).toISOString(),
                createdAtMs: file.stat.ctime,
                modifiedAtMs: file.stat.mtime,
            }
        };
    }

    async createNote(path: string, content: string[]): Promise<{ path: string }> {
        if (this.app.vault.getAbstractFileByPath(path)) {
            throw new Error(t("errFileAlreadyExists", { path }));
        }

        await this.app.vault.create(path, this.clearText(content.join("\n")));
        return { path };
    }

    async moveNote(path: string, newPath: string): Promise<{ path: string }> {
        const file = this.getFileByPath(path);
        await this.app.fileManager.renameFile(file, newPath);
        return { path };
    }

    async replaceNote(path: string, content: string[]): Promise<{ path: string }> {
        const file = this.getFileByPath(path);
        await this.app.vault.modify(file, this.clearText(content.join("\n")));
        return { path };
    }

    async openNote(name: string): Promise<{ path: string }> {
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

    findByProperty(
        property: string,
        value: string | number | boolean,
    ): { path: string; properties: Record<string, unknown> } | null {
        for (const file of this.app.vault.getMarkdownFiles()) {
            const cache: CachedMetadata | null = this.app.metadataCache.getFileCache(file);
            const frontmatter = cache?.frontmatter;
            if (!frontmatter) continue;

            const frontmatterValue: unknown = frontmatter[property] as unknown;

            // Double comparaison pour tolérer les cas où "456" et 456 doivent matcher.
            if (frontmatterValue == value || String(frontmatterValue) === String(value)) {
                return {
                    path: file.path,
                    properties: frontmatter,
                };
            }
        }

        return null;
    }

    private clearText(text: string): string {
        // Le serveur transmet les tabulations comme la chaîne littérale "\\t".
        return text.replace('\\t', '\t');
    }
}
