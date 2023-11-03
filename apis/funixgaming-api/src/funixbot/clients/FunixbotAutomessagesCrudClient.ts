import { FunixgamingService } from "../../funixgaming-service";
import { AutomessageDTO } from "../dtos/AutomessageDTO";

export class FunixbotAutomessagesCrudClient extends FunixgamingService<AutomessageDTO> {
  constructor() {
    super("/funixbot/automessages");
  }
}
