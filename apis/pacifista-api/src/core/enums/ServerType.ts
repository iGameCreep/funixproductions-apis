import { ServerGameMode } from "./ServerGameMode";

export interface ServerTypeInterface {
  displayName: string;
  proxyServerName: string;
  gameMode: ServerGameMode;
}

export const ServerType: { [key: string]: ServerTypeInterface } = {
  HUB: {
    displayName: "Hub",
    proxyServerName: "hub",
    gameMode: ServerGameMode.NEUTRAL,
  },
  CREATIVE: {
    displayName: "Créatif",
    proxyServerName: "creatif",
    gameMode: ServerGameMode.CREATIVE,
  },
  EVENT: {
    displayName: "Event",
    proxyServerName: "server_event",
    gameMode: ServerGameMode.NEUTRAL,
  },
  SURVIE_ALPHA: {
    displayName: "SurvieAlpha",
    proxyServerName: "survie_alpha",
    gameMode: ServerGameMode.SURVIVAL,
  },
  SURVIE_BETA: {
    displayName: "SurvieBeta",
    proxyServerName: "survie_beta",
    gameMode: ServerGameMode.SURVIVAL,
  },
  SURVIE_RESOURCE: {
    displayName: "Ressource",
    proxyServerName: "survie_ressource",
    gameMode: ServerGameMode.SURVIVAL,
  },
};
