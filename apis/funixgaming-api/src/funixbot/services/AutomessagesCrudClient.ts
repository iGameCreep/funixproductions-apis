import { FunixgamingService } from "../../funixgaming-service";
import { AutomessageDTO } from "../dtos/AutomessageDTO";

export class AutomessagesCrudClient extends FunixgamingService<AutomessageDTO> {
  constructor() {
    super("/funixbot/automessages");
  }
}
