import { setApikey } from "funixproductions-apis-core";

export class Client {
  /**
   * Creates a new instance of the Client class.
   * @param {string} [apiKey] - Optional API key for authentication.
   */
  constructor(apiKey?: string) {
    setApikey(apiKey || "");
  }
}
