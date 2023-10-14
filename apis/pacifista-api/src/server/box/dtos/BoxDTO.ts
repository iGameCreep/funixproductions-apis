import { ApiDTO } from "funixproductions-apis-core";
import { ServerGameMode } from "../../../core/enums/ServerGameMode";
import { BoxRewardDTO } from "./BoxRewardDTO";

export class BoxDTO extends ApiDTO {
  boxname!: string;
  boxDisplayName!: string;
  boxDescription!: string;
  dropAmount!: number;
  gameMode!: ServerGameMode;
  rewards!: BoxRewardDTO[];
}
