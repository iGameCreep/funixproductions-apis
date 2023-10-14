import { LocationDTO } from "../../../core/dtos/LocationDTO";

export class GuildHomeDTO extends LocationDTO {
  guildId!: string;
  publicAccess!: boolean;
}
