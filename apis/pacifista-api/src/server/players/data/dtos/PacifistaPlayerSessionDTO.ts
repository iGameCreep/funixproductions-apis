import { MinecraftPlayerDTO } from "../../../../core/dtos/MinecraftPlayerDTO";

export class PacifistaPlayerSessionDTO extends MinecraftPlayerDTO {
  /**
   * Date of connection
   */
  connectedAt!: Date;

  /**
   * Date of disconnection
   */
  disconnectedAt!: Date;
}
