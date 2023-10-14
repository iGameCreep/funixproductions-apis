import { FunixbotCommandType } from "../enums/CommandType";
import { ApiDTO } from "funixproductions-apis-core";

export class CommandDTO extends ApiDTO {
  /**
   * The command to respond to
   */
  command!: string;
  /**
   * The command type
   */
  type!: FunixbotCommandType;
  /**
   * The message replied when the command is triggered
   */
  message!: string;
}
