import {FunixbotAutomessagesCrudService} from './funixbot/services/funixbot-automessages-crud-service';
import {FunixbotCommandsCrudService} from './funixbot/services/funixbot-commands-crud-service';
import {FunixbotUserExpCrudService} from './funixbot/services/funixbot-user-exp-crud-service';
import {setApikey} from 'funixproductions-apis-core';

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
    funixbot_automessages: new FunixbotAutomessagesCrudService(),
    funixbot_commands: new FunixbotCommandsCrudService(),
    funixbot_user_exp: new FunixbotUserExpCrudService()
  }
}