import { PacifistaService } from "../../../../pacifista-service";
import { PacifistaPlayerChatMessageDTO } from "../dtos/PacifistaPlayerChatMessageDTO";

export class PacifistaPlayerChatMessageCrudClient extends PacifistaService<PacifistaPlayerChatMessageDTO> {
  constructor() {
    super("/playerdata/chatmessages");
  }
}
