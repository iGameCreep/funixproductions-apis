import { PacifistaService } from "../../../../pacifista-service";
import { PlayerEnderchestDataDTO } from "../dtos/PlayerEnderchestDataDTO";

export class PlayerEnderchestDataCrudClient extends PacifistaService<PlayerEnderchestDataDTO> {
  constructor() {
    super("/playersync/enderchests");
  }
}
