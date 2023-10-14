import { LocationDTO } from "../../../core/dtos/LocationDTO";
import { WarpType } from "../enums/WarpType";

export class WarpDTO extends LocationDTO {
  name!: string;
  warpItem!: string;
  publicAccess: boolean = true;
  playerOwnerUuid!: string;
  type!: WarpType;
}
