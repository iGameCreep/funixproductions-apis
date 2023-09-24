import { PacifistaService } from "../../../pacifista-service";
import { GuildExperienceDTO } from "../dtos/GuildExperienceDTO";

export class GuildExperienceCrudClient extends PacifistaService<GuildExperienceDTO> {
  constructor() {
    super("/guilds/exp");
  }
}
