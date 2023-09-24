import { PacifistaService } from "../../../pacifista-service";
import { GuildMemberDTO } from "../dtos/GuildMemberDTO";

export class GuildMemberCrudClient extends PacifistaService<GuildMemberDTO> {
  constructor() {
    super("/guilds/members");
  }
}
