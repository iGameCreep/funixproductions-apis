import {FunixgamingService} from "../../funixgaming-service";
import {FunixbotAutomessageDto} from "../dtos/funixbot-automessage-dto";

export class FunixbotAutomessagesCrudService extends FunixgamingService<FunixbotAutomessageDto> {
    constructor(apiKey?: string) {
        super ('/funixbot/automessages', apiKey)
    }
}