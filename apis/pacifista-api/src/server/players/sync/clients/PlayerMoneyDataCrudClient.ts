import { PacifistaService } from "../../../../pacifista-service";
import { PlayerMoneyDataDTO } from "../dtos/PlayerMoneyDataDTO";

export class PlayerMoneyDataCrudClient extends PacifistaService<PlayerMoneyDataDTO> {
  constructor() {
    super("/playersync/money");
  }
}
