import { ApiDTO } from "funixproductions-apis-core";
import { GuildRole } from "../enums/GuildRole";

export class GuildMemberDTO extends ApiDTO {
  guildId!: string;
  playerUuid!: string;
  role!: GuildRole;
}
