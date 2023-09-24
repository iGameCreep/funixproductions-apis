import { MinecraftPlayerDTO } from "../../../../core/dtos/MinecraftPlayerDTO";
import {
  ServerType,
  ServerTypeInterface,
} from "../../../../core/enums/ServerType";

export class PacifistaPlayerChatMessageDTO extends MinecraftPlayerDTO {
  message!: string;
  serverType!: ServerTypeInterface;
  isCommand!: boolean;
}
