import { FunixgamingService } from "../../funixgaming-service";
import { CommandDTO } from "../dtos/CommandDTO";

export class CommandsCrudClient extends FunixgamingService<CommandDTO> {
  constructor() {
    super("/funixbot/command");
  }
}
