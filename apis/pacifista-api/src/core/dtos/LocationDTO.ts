import { ApiDTO } from "funixproductions-apis-core";
import { ServerTypeInterface } from "../enums/ServerType";

export abstract class LocationDTO extends ApiDTO {
  worldUuid!: string;
  serverType!: ServerTypeInterface;
  x!: number;
  y!: number;
  z!: number;
  yaw!: number;
  pitch!: number;
}
