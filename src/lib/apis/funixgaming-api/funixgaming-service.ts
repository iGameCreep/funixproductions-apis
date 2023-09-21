import {ApiBaseUrl} from "../apis";
import {CrudHttpClient} from "../core/components/requests/crud-http-client";
import {ApiDTO} from "../core/dtos/api-dto";

export class FunixgamingService<DTO extends ApiDTO> extends CrudHttpClient<DTO> {
    constructor(path: string, apiKey?: string) {
        super(ApiBaseUrl.FUNIXGAMING, path, apiKey);
    }
}