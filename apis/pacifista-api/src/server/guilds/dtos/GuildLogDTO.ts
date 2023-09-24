import { ApiDTO } from "funixproductions-apis-core";

export class GuildLogDTO extends ApiDTO {
  guildId!: string;
  playerUuid!: string;
  action!: string;
}
