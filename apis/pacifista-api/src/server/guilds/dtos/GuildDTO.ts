import { ApiDTO } from "funixproductions-apis-core";
import { GuildExperienceDTO } from "./GuildExperienceDTO";
import { GuildHomeDTO } from "./GuildHomeDTO";
import { GuildMemberDTO } from "./GuildMemberDTO";

export class GuildDTO extends ApiDTO {
  name!: string;
  description!: string;
  homes!: GuildHomeDTO[];
  members!: GuildMemberDTO[];
  experience!: GuildExperienceDTO;
  money!: number;
}
