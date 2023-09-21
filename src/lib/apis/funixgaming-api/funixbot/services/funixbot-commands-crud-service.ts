import {FunixgamingService} from "../../funixgaming-service";
import {FunixbotCommandDto} from "../dtos/funixbot-command-dto";

export class FunixbotCommandsCrudService extends FunixgamingService<FunixbotCommandDto> {
    constructor(apiKey?: string) {
        super('/funixbot/command', apiKey);
    }
}