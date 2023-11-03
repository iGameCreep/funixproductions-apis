import { FunixgamingService } from "../../funixgaming-service";
import { UserExpDTO } from "../dtos/UserExpDTO";

export class FunixbotUserExpCrudClient extends FunixgamingService<UserExpDTO> {
  constructor() {
    super("/funixbot/user/exp");
  }
}
