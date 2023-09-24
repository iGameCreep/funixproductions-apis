import { PlayerDataServerDTO } from "./PlayerDataServerDTO";

export class PlayerExperienceDataDTO extends PlayerDataServerDTO {
  totalExperience!: number;
  exp!: number;
  level!: number;
}
