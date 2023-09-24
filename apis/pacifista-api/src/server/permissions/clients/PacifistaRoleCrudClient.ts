import { PacifistaService } from "../../../pacifista-service";
import { PacifistaPlayerRoleDTO } from "../dtos/PacifistaPlayerRoleDTO";

export class PacifistaRoleCrudClient extends PacifistaService<PacifistaPlayerRoleDTO> {
  constructor() {
    super("/permissions/gameroles");
  }
}
