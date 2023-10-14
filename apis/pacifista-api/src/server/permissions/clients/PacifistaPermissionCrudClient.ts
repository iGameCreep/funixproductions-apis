import { PacifistaService } from "../../../pacifista-service";
import { PacifistaPermissionDTO } from "../dtos/PacifistaPermissionDTO";

export class PacifistaPermissionCrudClient extends PacifistaService<PacifistaPermissionDTO> {
  constructor() {
    super("/permissions/gamepermissions");
  }
}
