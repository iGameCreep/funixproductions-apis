import { ApiDTO } from "funixproductions-apis-core";

export class FunixbotUserExpDto extends ApiDTO {
  twitchUserId?: string;
  twitchUsername?: string;
  xp?: number;
  xpNextLevel?: number;
  level?: number;
  lastMessageDateSeconds?: bigint;
}
