import { PacifistaService } from "../../../../pacifista-service";
import { PacifistaPlayerSessionDTO } from "../dtos/PacifistaPlayerSessionDTO";

export class PacifistaPlayerSessionCrudClient extends PacifistaService<PacifistaPlayerSessionDTO> {
  constructor() {
    super("/playerdata/session");
  }
}
