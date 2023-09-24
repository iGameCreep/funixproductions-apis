import { ApiDTO } from "funixproductions-apis-core";

export class GuildExperienceDTO extends ApiDTO {
  guildId!: string;
  level!: number;
  experience!: number;
}
