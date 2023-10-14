import { PacifistaService } from "../../../../pacifista-service";
import { PlayerInventoryDataDTO } from "../dtos/PlayerInventoryDataDTO";

export class PlayerInventoryDataCrudClient extends PacifistaService<PlayerInventoryDataDTO> {
  constructor() {
    super("/playersync/inventory");
  }
}
