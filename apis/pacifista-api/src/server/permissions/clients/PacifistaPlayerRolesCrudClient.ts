import { PacifistaService } from "../../../pacifista-service";
import { PacifistaPlayerRoleDTO } from "../dtos/PacifistaPlayerRoleDTO";

export class PacifistaPlayerRoleCrudClient extends PacifistaService<PacifistaPlayerRoleDTO> {
  constructor() {
    super("/permissions/gameroles/player");
  }
}
