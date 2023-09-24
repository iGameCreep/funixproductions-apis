import { PacifistaService } from "../../../pacifista-service";
import { WarpDTO } from "../dtos/WarpDTO";

export class WarpCrudClient extends PacifistaService<WarpDTO> {
  constructor() {
    super("/warps");
  }
}
