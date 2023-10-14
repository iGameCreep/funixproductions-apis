import { PacifistaService } from "../../../../pacifista-service";
import { PlayerExperienceDataDTO } from "../dtos/PlayerExperienceDataDTO";

export class PlayerExperienceDataCrudClient extends PacifistaService<PlayerExperienceDataDTO> {
  constructor() {
    super("/playersync/experience");
  }
}
