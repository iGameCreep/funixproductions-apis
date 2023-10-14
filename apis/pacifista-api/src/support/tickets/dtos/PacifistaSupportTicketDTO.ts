import { ApiDTO } from "funixproductions-apis-core";
import { TicketCreationSource } from "../enums/TicketCreationSource";
import { TicketType } from "../enums/TicketType";
import { TicketStatus } from "../enums/TicketStatus";

export class PacifistaSupportTicketDTO extends ApiDTO {
  object!: string;
  createdByName!: string;
  createdById!: string;
  creationSource!: TicketCreationSource;
  type!: TicketType;
  status!: TicketStatus;
}
