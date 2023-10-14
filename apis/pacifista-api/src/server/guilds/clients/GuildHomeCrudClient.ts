import { PacifistaService } from "../../../pacifista-service";
import { GuildHomeDTO } from "../dtos/GuildHomeDTO";

export class GuildHomeCrudClient extends PacifistaService<GuildHomeDTO> {
  constructor() {
    super("/guilds/homes");
  }
}
