import { ApiDTO } from "funixproductions-apis-core";

export class AutomessageDTO extends ApiDTO {
  /**
   * The message to send.
   */
  message!: string;
  /**
   * The game name to send the message to.
   * Null if you can send it anytime
   */
  gameName!: string | null;
  /**
   * If the message is announced or not in the twitch chat.
   */
  isAnnounced: boolean = false;
}
