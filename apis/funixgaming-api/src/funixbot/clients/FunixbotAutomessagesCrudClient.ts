import { FunixgamingService } from "../../funixgaming-service";
import { FunixbotAutomessageDto } from "../dtos/funixbot-automessage-dto";

export class FunixbotAutomessagesCrudClient extends FunixgamingService<FunixbotAutomessageDto> {
  constructor() {
    super("/funixbot/automessages");
  }
}
