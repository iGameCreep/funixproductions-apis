import { ApiDTO } from "funixproductions-apis-core";

export class GuildMessageDTO extends ApiDTO {
  guildId!: string;
  playerUuid!: string;
  subject!: string;
  message!: string;
}
