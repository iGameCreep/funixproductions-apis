import { PacifistaService } from "../../../pacifista-service";
import { BoxRewardDTO } from "../dtos/BoxRewardDTO";

export class BoxRewardCrudClient extends PacifistaService<BoxRewardDTO> {
  constructor() {
    super("box/rewards");
  }
}
