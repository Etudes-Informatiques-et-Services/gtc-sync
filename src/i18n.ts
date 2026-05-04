const fr = {
  // Statut de connexion
  statusConnecting: "GTC-Sync : Connexion en cours…",
  statusConnected: "GTC-Sync : Connecté",
  statusDisconnected: "GTC-Sync : Déconnecté (reconnexion auto)",
  statusAuthError: "GTC-Sync : Erreur d'authentification",

  // Ribbon & menus
  ribbonQuickNote: "Créer une note rapide",
  menuCreateQuickNote: "Créer une note rapide",
  menuSendToQuickNote: "Envoyer dans note rapide",

  // Commandes
  cmdCreateQuickNote: "Créer une note rapide",
  cmdConnectWebSocket: "Connect WebSocket",
  cmdDisconnectWebSocket: "Disconnect WebSocket",

  // Modales
  modalDisconnectedTitle: "GTC-Sync : Déconnecté",
  modalDisconnectedMessage: "Le plugin n'est pas connecté au serveur GTC-Sync.\nLes modifications ne seront pas synchronisées.",
  modalSessionReplacedTitle: "GTC-Sync : Attention",
  modalSessionReplacedMessage: "La connexion a été fermée car une autre session GTC-Sync vient de se connecter.",
  modalSaveErrorTitle: "GTC-Sync : Attention",
  modalNoteReservedMessage: "La note est réservée par un autre utilisateur,\nles modifications peuvent être perdues !",
  modalNoteUnexistingMessage: "Cette note n'existe plus.",
  modalErrorMessage: "Erreur {code} : {message}",

  // Boutons
  btnReconnect: "Reconnecter",

  // Notices
  noteSynced: "La note a été synchronisée.",
  noticeQuickNoteCreated: "Note rapide créée : {path}",
  noticeQuickNoteFailed: "Impossible de créer la note rapide : {message}",
  noticeSendToQuickNoteFailed: "Impossible de synchroniser la note rapide : {message}",
  noticeWsConnected: "WebSocket connecté",
  noticeWsDisconnected: "WebSocket déconnecté",
  noticeSyncFailed: "GTC-Sync : échec de la synchronisation — {message}",
  noticeMessageError: "GTC-Sync : erreur de traitement du message — {message}",
  noticeCommandFailed: "GTC-Sync : échec de {type} — {message}",

  // Paramètres
  settingsUrlName: "WebSocket URL",
  settingsUrlDesc: "Adresse du serveur WebSocket",
  settingsTokenName: "WebSocket token",
  settingsTokenDesc: "Token envoyé au serveur après connexion",
  settingsAutoConnectName: "Auto connect",
  settingsAutoConnectDesc: "Se reconnecter automatiquement au chargement du plugin",
  settingsDebugName: "Mode debug",
  settingsDebugDesc: "Affiche les logs détaillés dans la console du développeur (F12)",

  // Debug
  debugConnecting: "connexion à",
  debugSocketOpen: "socket ouverte",
  debugSendAuth: "envoi auth",
  debugAuthOk: "authentification OK",
  debugReconnecting: "reconnexion dans 3 s",

  // Erreurs
  errWsNotInit: "WebSocket non initialisé",
  errWsClosed: "WebSocket fermé",
  errWsConnClosed: "Connexion WebSocket fermée",
  errWsNotConnected: "WebSocket non connecté",
  errWsTimeout: "Timeout en attente de réponse pour {type}",
  errInvalidResponseGetId: "Réponse invalide pour note.getId",
  errInvalidResultGetId: "Résultat invalide pour note.getId",
  errMissingIdNote: "idNote manquant dans la réponse",
  errInvalidResponseSave: "Réponse invalide pour note.saved",
  errInvalidResultSave: "Résultat invalide pour note.saved",
  errUnknown: "Erreur inconnue",
  errInvalidMessage: "Message invalide : objet attendu",
  errMissingId: "Message invalide : id manquant",
  errMissingPath: "{type} : path manquant",
  errMissingContent: "{type} : content manquant",
  errMissingProperty: "note.findByProperty : property manquant",
  errInvalidValue: "note.findByProperty : value invalide",
  errUnknownCommand: "Type de commande inconnu : {type}",
  errFileNotFound: "Fichier introuvable : {path}",
  errFileAlreadyExists: "Le fichier existe déjà : {path}",
  errEmptyNoteName: "Nom de note vide",
  errNoteNotFound: "Note introuvable : {name}",
  errMultipleNotes: "Plusieurs notes portent ce nom : {name} ({paths})",
};

type TranslationKey = keyof typeof fr;
type TranslationMap = Record<TranslationKey, string>;

const en: TranslationMap = {
  // Connection status
  statusConnecting: "GTC-Sync: Connecting…",
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
  noticeSyncFailed: "GTC-Sync: sync failed — {message}",
  noticeMessageError: "GTC-Sync: message processing error — {message}",
  noticeCommandFailed: "GTC-Sync: {type} failed — {message}",

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
  errMultipleNotes: "Multiple notes share this name: {name} ({paths})",
};

const translations: Record<string, TranslationMap> = { fr, en };

function detectLang(): string {
  const locale: string =
    (window as Window & { moment?: { locale?: () => string } }).moment?.locale?.() ??
    navigator.language ??
    "en";
  return locale.startsWith("fr") ? "fr" : "en";
}

export function t(key: TranslationKey, vars?: Record<string, string>): string {
  const dict = translations[detectLang()];
  let str = dict[key];
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(`{${k}}`, v);
    }
  }
  return str;
}
