import { ApiDTO } from "funixproductions-apis-core";

export class UserExpDTO extends ApiDTO {
  /**
   * The viewer's Twitch User ID
   */
  twitchUserId!: string;
  /**
   * The viewer's Twitch Username
   */
  twitchUsername!: string;
  /**
   * The viewer's experience points
   */
  xp!: number;
  /**
   * The experience required to rank up
   */
  xpNextLevel!: number;
  /**
   * The viewer's level
   */
  level!: number;
  /**
   * The date of the viewer's last message
   * Date is in seconds
   */
  lastMessageDateSeconds!: bigint;
}
