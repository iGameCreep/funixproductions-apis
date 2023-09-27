import { AutomessagesCrudClient } from "./funixbot/services/AutomessagesCrudClient";
import { CommandsCrudClient } from "./funixbot/services/CommandsCrudClient";
import { UserExpCrudClient } from "./funixbot/services/UserExpCrudClient";
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
    funixbot_automessages: new AutomessagesCrudClient(),
    funixbot_commands: new CommandsCrudClient(),
    funixbot_user_exp: new UserExpCrudClient(),
  };
}
