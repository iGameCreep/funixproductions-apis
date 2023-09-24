import { LocationDTO } from "../../../../core/dtos/LocationDTO";
import { ServerTypeInterface } from "../../../../core/enums/ServerType";

export class PacifistaPlayerHomeDTO extends LocationDTO {
  /**
   * The player's minecraft uuid
   */
  minecraftUuid!: string;

  /**
   * The player's home name
   */
  name!: string;

  /**
   * The player's home server type
   */
  serverType!: ServerTypeInterface;
}
