import {ApiDTO} from "funixproductions-apis-core";

export class FunixbotAutomessageDto extends ApiDTO {
  message?: string = '';
  gameName?: string = '';
  isAnnounced: boolean = false;
}