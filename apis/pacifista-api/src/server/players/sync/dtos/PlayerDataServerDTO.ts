import { PlayerDataDTO } from "./PlayerDataDTO";
import { ServerGameMode } from "../../../../core/enums/ServerGameMode";

export class PlayerDataServerDTO extends PlayerDataDTO {
  gameMode!: ServerGameMode;
}
