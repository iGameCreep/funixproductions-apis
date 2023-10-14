import { PacifistaService } from "../../../pacifista-service";
import { SanctionDTO } from "../dtos/SanctionDTO";

export class SanctionCrudClient extends PacifistaService<SanctionDTO> {
  constructor() {
    super("/sanctions");
  }
}
