import { PacifistaService } from "../../../pacifista-service";
import { GuildLogDTO } from "../dtos/GuildLogDTO";

export class GuildLogCrudClient extends PacifistaService<GuildLogDTO> {
  constructor() {
    super("/guilds/logs");
  }
}
