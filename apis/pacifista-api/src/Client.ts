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
   * The Pacifista API methods.
   */
  public server = {
    box: {},
    guilds: {},
    permissions: {},
    players: {},
    sanctions: {},
    warps: {},
  };

  public support = {
    tickets: {},
  };

  public web = {
    news: {},
    shop: {},
  };
}
