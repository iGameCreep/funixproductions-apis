import { FunixgamingService } from "../../funixgaming-service";
import { UserExpDTO } from "../dtos/UserExpDTO";

export class UserExpCrudClient extends FunixgamingService<UserExpDTO> {
  constructor() {
    super("/funixbot/user/exp");
  }
}
