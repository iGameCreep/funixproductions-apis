import { CrudHttpClient, ApiDTO } from "funixproductions-apis-core";

export const API_URL: string = "https://api.pacifista.fr";
export class PacifistaService<DTO extends ApiDTO> extends CrudHttpClient<DTO> {
  constructor(path: string) {
    super(API_URL, path);
  }
}
