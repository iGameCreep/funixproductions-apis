import {setApikey} from "./apis/core/components/requests/caller";
import {methods as funixgaming_methods} from './apis/funixgaming-api/funixgaming-api';

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
  public funixgaming_api = funixgaming_methods;
}