import { PacifistaService } from "../../../../pacifista-service";
import { PacifistaPlayerDataDTO } from "../dtos/PacifistaPlayerDataDTO";

export class PacifistaPlayerDataCrudClient extends PacifistaService<PacifistaPlayerDataDTO> {
  constructor() {
    super("/playerdata/data");
  }
}
