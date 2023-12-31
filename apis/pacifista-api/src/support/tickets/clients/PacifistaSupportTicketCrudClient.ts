import { Paginated, PageOption } from "funixproductions-apis-core";
import { API_URL, PacifistaService } from "../../../pacifista-service";
import { PacifistaSupportTicketDTO } from "../dtos/PacifistaSupportTicketDTO";
import { HttpMethods, callApi } from "funixproductions-apis-core";

export class PacifistaSupportTicketCrudClient extends PacifistaService<PacifistaSupportTicketDTO> {
  constructor() {
    super("/support/ticket");
  }

  protected webPath: string = API_URL + "/support/ticket/web";

  fetchUserTickets(
    options: PageOption,
    ticketStatus?: TicketStatusStringValues
  ): Promise<Paginated<PacifistaSupportTicketDTO>> {
    const params: URLSearchParams = new URLSearchParams();
    params.append("ticketStatus", ticketStatus ? ticketStatus : "all");

    return callApi(HttpMethods.GET, this.webPath, {
      options: options,
      params: params,
    });
  }

  createTicketFromWeb(
    request: PacifistaSupportTicketDTO
  ): Promise<Paginated<PacifistaSupportTicketDTO>> {
    return callApi(HttpMethods.POST, this.webPath, {
      data: request,
    });
  }
}

export type TicketStatusStringValues =
  | "all"
  | "created"
  | "in_progress"
  | "solved";
