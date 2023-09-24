import { ApiDTO } from "funixproductions-apis-core";
import { PacifistaSupportTicketDTO } from "./PacifistaSupportTicketDTO";

export class PacifistaSupportTicketMessageDTO extends ApiDTO {
  ticket!: PacifistaSupportTicketDTO;
  writtenByName!: string;
  writtenById!: string;
  message!: string;
}
