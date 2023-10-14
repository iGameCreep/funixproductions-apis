import { PacifistaService } from "../../../pacifista-service";
import { PacifistaNewsDTO } from "../dtos/PacifistaNewsDTO";

export class PacifistaNewsCrudClient extends PacifistaService<PacifistaNewsDTO> {
  constructor() {
    super("/web/news");
  }
}
