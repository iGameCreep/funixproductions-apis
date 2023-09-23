import {FunixbotAutomessagesCrudService} from './funixbot/services/funixbot-automessages-crud-service';
import {FunixbotCommandsCrudService} from './funixbot/services/funixbot-commands-crud-service';
import {FunixbotUserExpCrudService} from './funixbot/services/funixbot-user-exp-crud-service';

export const methods = {
    funixot: {
        funixbot_automessages: new FunixbotAutomessagesCrudService(),
        funixbot_commands: new FunixbotCommandsCrudService(),
        funixbot_user_exp: new FunixbotUserExpCrudService()
    }
}