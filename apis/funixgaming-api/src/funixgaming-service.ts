import {CrudHttpClient, ApiDTO} from "funixproductions-apis-core";

export class FunixgamingService<DTO extends ApiDTO> extends CrudHttpClient<DTO> {
    constructor(path: string) {
        super('https://api.funixgaming.fr', path);
    }
}