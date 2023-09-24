import { ApiDTO } from "funixproductions-apis-core";
import { BoxDTO } from "./BoxDTO";

export class PlayerBoxDTO extends ApiDTO {
  playerUuid!: string;
  box!: BoxDTO;
  amount!: number;
}
