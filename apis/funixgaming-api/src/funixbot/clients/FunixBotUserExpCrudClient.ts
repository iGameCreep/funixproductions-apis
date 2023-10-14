import { FunixgamingService } from "../../funixgaming-service";
import { FunixbotUserExpDto } from "../dtos/funixbot-user-exp-dto";

export class FunixbotUserExpCrudClient extends FunixgamingService<FunixbotUserExpDto> {
  constructor() {
    super("/funixbot/user/exp");
  }
}
