import {setApikey} from "./apis/core/components/requests/caller";
import {methods as funixgaming_methods} from './apis/funixgaming-api/funixgaming-api';

export class Client {
  constructor(apiKey?: string) {
    setApikey(apiKey || "");
  }

  public funixgaming_api = funixgaming_methods;
}
