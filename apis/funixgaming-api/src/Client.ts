import { FunixbotAutomessagesCrudClient } from "./funixbot/clients/FunixbotAutomessagesCrudClient";
import { FunixbotCommandsCrudClient } from "./funixbot/clients/FunixbotCommandsCrudClient";
import { FunixbotUserExpCrudClient } from "./funixbot/clients/FunixBotUserExpCrudClient";
import { setApikey } from "funixproductions-apis-core";

/**
 * Represents an API Client
 */
export class Client {
  /**
   * Creates a new instance of the Client class.
   * @param {string} [apiKey] - Optional API key for authentication.
   */
  constructor(apiKey?: string) {
    setApikey(apiKey || "");
  }

  /**
   * The FunixGaming API methods.
   */
  public funixbot = {
    funixbot_automessages: new FunixbotAutomessagesCrudClient(),
    funixbot_commands: new FunixbotCommandsCrudClient(),
    funixbot_user_exp: new FunixbotUserExpCrudClient(),
  };
}
