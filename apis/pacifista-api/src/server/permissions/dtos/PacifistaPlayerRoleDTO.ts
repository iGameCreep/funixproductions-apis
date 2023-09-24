import { ApiDTO } from "funixproductions-apis-core";
import { PacifistaRoleDTO } from "./PacifistaRoleDTO";

export class PacifistaPlayerRoleDTO extends ApiDTO {
  playerUuid!: string;
  role!: PacifistaRoleDTO;
}
