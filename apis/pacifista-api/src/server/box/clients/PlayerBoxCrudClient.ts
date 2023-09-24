import { PacifistaService } from "../../../pacifista-service";
import { PlayerBoxDTO } from "../dtos/PlayerBoxDTO";

export class PlayerBoxCrudClient extends PacifistaService<PlayerBoxDTO> {
  constructor() {
    super("box/player");
  }
}
