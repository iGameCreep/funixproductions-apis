import { ApiDTO } from "funixproductions-apis-core";

export class BoxRewardDTO extends ApiDTO {
  boxId!: string;
  itemSerialized!: string;
  rarity!: number;
}
