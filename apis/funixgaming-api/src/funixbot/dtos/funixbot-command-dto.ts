import {FunixbotCommandType} from "../enums/funixbot-command-type";
import {ApiDTO} from "funixproductions-apis-core";

export class FunixbotCommandDto extends ApiDTO {
  command: string = '';
  message: string = '';
  type: FunixbotCommandType = FunixbotCommandType.OTHER;
}