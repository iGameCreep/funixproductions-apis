import { PacifistaService } from "../../../pacifista-service";
import { BoxDTO } from "../dtos/BoxDTO";

export class BoxCrudClient extends PacifistaService<BoxDTO> {
  constructor() {
    super("/box");
  }
}
