import { PacifistaService } from "../../../pacifista-service";
import { GuildDTO } from "../dtos/GuildDTO";

export class GuildCrudClient extends PacifistaService<GuildDTO> {
  constructor() {
    super("/guilds");
  }
}
