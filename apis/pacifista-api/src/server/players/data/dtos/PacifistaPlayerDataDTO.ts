import { MinecraftPlayerDTO } from "../../../../core/dtos/MinecraftPlayerDTO";

export class PacifistaPlayerDataDTO extends MinecraftPlayerDTO {
  /**
   * The player's play time in seconds.
   */
  playTime!: number;

  /**
   * The player's last connection
   */
  lastConnection!: Date;

  /**
   * The player's first connection
   */
  firstConnection!: Date;

  /**
   * Boolean if the player accepts the /pay command
   */
  acceptPayments!: boolean;

  /**
   * Boolean if the player accepts the /tpa command
   */
  acceptTeleportation!: boolean;

  /**
   * Boolean if the player accept having pings when someone write his username in chat
   */
  acceptPingSoundTagMessage!: boolean;
}
