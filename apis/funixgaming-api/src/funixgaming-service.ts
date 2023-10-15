import { CrudHttpClient, ApiDTO } from "funixproductions-apis-core";
export const API_URL: string = "https://api.funixgaming.fr";

export class FunixgamingService<
  DTO extends ApiDTO
> extends CrudHttpClient<DTO> {
  constructor(path: string) {
    super(API_URL, path);
  }
}
