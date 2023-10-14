import { ApiDTO } from "funixproductions-apis-core";
import { PacifistaPermissionDTO } from "./PacifistaPermissionDTO";

/**
 * Role used in game server
 */
export class PacifistaRoleDTO extends ApiDTO {
  /**
   * Name of the role
   */
  name!: string;

  /**
   * Player name's color in chat
   * Bungee ChatColor
   */
  playerNameColor!: string;

  /**
   * Prefix before the playerName
   * Example: §c§l[Fondateur] §e§l
   */
  prefix!: string;

  /**
   * Power used in sorting tablist
   * a b c d e f g
   */
  power!: string;

  /**
   * Staff rank or not
   * Used to cumulate for example a legendary grade with a moderator grade
   */
  staffRank!: boolean;

  /**
   * List of game permissions
   */
  permissions!: PacifistaPermissionDTO[];
}
