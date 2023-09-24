import { ApiDTO } from "funixproductions-apis-core";
import { SanctionType } from "../enums/SanctionType";

export class SanctionDTO extends ApiDTO {
  /**
   * Sanctionned player UUID
   */
  playerSanctionUuid!: string;

  /**
   * Sanctionned player IPv4 adress
   */
  playerSanctionIp!: string;

  /**
   * Sanction reason
   * Used to know why the player received it
   */
  reason!: string;

  /**
   * Sanction type
   * Used to determine what type of sanction it is
   */
  sanctionType!: SanctionType;

  /**
   * Last player's UUID to update the sanction
   */
  playerActionUuid!: string;

  /**
   * Last player's IPv4 to update the sanction
   */
  playerActionIp!: string;

  /**
   * Know if the sanction is ip sanction
   * If it's true its tells that every player with this ip will be
   * affected by this sanction
   */
  ipSanction!: boolean;

  /**
   * Know if the sanction is active
   */
  active!: boolean;

  /**
   * Sanction expiration date
   * null means it's permanent
   */
  expirationDate!: Date | null;
}
