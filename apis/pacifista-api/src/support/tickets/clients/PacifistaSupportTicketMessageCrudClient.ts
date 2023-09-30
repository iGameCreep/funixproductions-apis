import { Paginated, PageOption } from "funixproductions-apis-core";
import { PacifistaService } from "../../../pacifista-service";
import { PacifistaSupportTicketMessageDTO } from "../dtos/PacifistaSupportTicketMessageDTO";
import {
  HttpMethods,
  callApi,
} from "funixproductions-apis-core/dist/components/requests/caller";

export class PacifistaSupportTicketMessageCrudClient extends PacifistaService<PacifistaSupportTicketMessageDTO> {
  constructor() {
    super("/support/ticket");
  }

  protected webPath: string = "https://api.pacifista.fr/support/ticket/web";

  fetchUserTicketsMessages(
    options: PageOption,
    ticketId?: string
  ): Promise<Paginated<PacifistaSupportTicketMessageDTO>> {
    const params: URLSearchParams = new URLSearchParams();
    params.append("ticketId", ticketId ?? "");

    return callApi(HttpMethods.GET, this.webPath, {
      options: options,
      params: params,
    });
  }

  createWeb(
    request: PacifistaSupportTicketMessageDTO
  ): Promise<Paginated<PacifistaSupportTicketMessageDTO>> {
    return callApi(HttpMethods.POST, this.webPath, {
      data: request,
    });
  }
}
