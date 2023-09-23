import {FunixgamingService} from "../../funixgaming-service";
import {FunixbotCommandDto} from "../dtos/funixbot-command-dto";

export class FunixbotCommandsCrudService extends FunixgamingService<FunixbotCommandDto> {
    constructor() {
        super('/funixbot/command');
    }
}