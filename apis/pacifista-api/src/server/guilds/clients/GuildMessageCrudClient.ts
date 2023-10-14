import { PacifistaService } from "../../../pacifista-service";
import { GuildMessageDTO } from "../dtos/GuildMessageDTO";

export class GuildMessageCrudClient extends PacifistaService<GuildMessageDTO> {
  constructor() {
    super("/guilds/messages");
  }
}
