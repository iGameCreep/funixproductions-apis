import { CrudHttpClient, ApiDTO } from "funixproductions-apis-core";

export class PacifistaService<DTO extends ApiDTO> extends CrudHttpClient<DTO> {
  constructor(path: string) {
    super("https://api.pacifista.fr", path);
  }
}
