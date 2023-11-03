import { setApikey } from "funixproductions-apis-core";
import { BoxCrudClient } from "./server/box/clients/BoxCrudClient";
import { BoxRewardCrudClient } from "./server/box/clients/BoxRewardCrudClient";
import { PlayerBoxCrudClient } from "./server/box/clients/PlayerBoxCrudClient";
import { GuildCrudClient } from "./server/guilds/clients/GuildCrudClient";
import { GuildExperienceCrudClient } from "./server/guilds/clients/GuildExperienceCrudClient";
import { GuildHomeCrudClient } from "./server/guilds/clients/GuildHomeCrudClient";
import { GuildLogCrudClient } from "./server/guilds/clients/GuildLogCrudClient";
import { GuildMemberCrudClient } from "./server/guilds/clients/GuildMemberCrudClient";
import { GuildMessageCrudClient } from "./server/guilds/clients/GuildMessageCrudClient";
import { PacifistaPermissionCrudClient } from "./server/permissions/clients/PacifistaPermissionCrudClient";
import { PacifistaPlayerRoleCrudClient } from "./server/permissions/clients/PacifistaPlayerRolesCrudClient";
import { PacifistaRoleCrudClient } from "./server/permissions/clients/PacifistaRoleCrudClient";
import { PacifistaPlayerChatMessageCrudClient } from "./server/players/data/clients/PacifistaPlayerChatMessageCrudClient";
import { PacifistaPlayerDataCrudClient } from "./server/players/data/clients/PacifistaPlayerDataCrudClient";
import { PacifistaPlayerSessionCrudClient } from "./server/players/data/clients/PacifistaPlayerSessionCrudClient";
import { PlayerEnderchestDataCrudClient } from "./server/players/sync/clients/PlayerEnderchestDataCrudClient";
import { PlayerExperienceDataCrudClient } from "./server/players/sync/clients/PlayerExperienceDataCrudClient";
import { PlayerInventoryDataCrudClient } from "./server/players/sync/clients/PlayerInventoryDataCrudClient";
import { PlayerMoneyDataCrudClient } from "./server/players/sync/clients/PlayerMoneyDataCrudClient";
import { SanctionCrudClient } from "./server/sanctions/clients/SanctionCrudClient";
import { WarpCrudClient } from "./server/warps/client/WarpCrudClient";
import { PacifistaNewsCrudClient } from "./web/news/clients/PacifistaNewsCrudClient";
import { ShopArticlesCrudClient } from "./web/shop/articles/clients/ShopArticlesCrudClient";
import { ShopCategoriesCrudClient } from "./web/shop/categories/clients/ShopCategoriesCrudClient";
import { PacifistaSupportTicketCrudClient } from "./support/tickets/clients/PacifistaSupportTicketCrudClient";
import { PacifistaSupportTicketMessageCrudClient } from "./support/tickets/clients/PacifistaSupportTicketMessageCrudClient";

/**
 * Represents an API Client
 */
export class Client {
  /**
   * Creates a new instance of the Client class.
   * @param {string} [apiKey] - Optional API key for authentication.
   */
  constructor(apiKey?: string) {
    setApikey(apiKey ?? "");
  }

  /**
   * The Pacifista API methods.
   */
  public server = {
    box: {
      box: new BoxCrudClient(),
      box_reward: new BoxRewardCrudClient(),
      player_box: new PlayerBoxCrudClient(),
    },
    guilds: {
      guild: new GuildCrudClient(),
      guild_experience: new GuildExperienceCrudClient(),
      guild_home: new GuildHomeCrudClient(),
      guild_log: new GuildLogCrudClient(),
      guild_member: new GuildMemberCrudClient(),
      guild_message: new GuildMessageCrudClient(),
    },
    permissions: {
      pacifista_permissions: new PacifistaPermissionCrudClient(),
      pacifista_player_roles: new PacifistaPlayerRoleCrudClient(),
      pacifista_role: new PacifistaRoleCrudClient(),
    },
    players: {
      data: {
        pacifista_player_chat_message:
          new PacifistaPlayerChatMessageCrudClient(),
        pacifista_player_data: new PacifistaPlayerDataCrudClient(),
        pacifista_player_session: new PacifistaPlayerSessionCrudClient(),
      },
      sync: {
        player_enderchest_data: new PlayerEnderchestDataCrudClient(),
        player_experience_data: new PlayerExperienceDataCrudClient(),
        player_inventory_data: new PlayerInventoryDataCrudClient(),
        player_money_data: new PlayerMoneyDataCrudClient(),
      },
    },
    sanctions: {
      sanction: new SanctionCrudClient(),
    },
    warps: {
      warp: new WarpCrudClient(),
    },
  };

  public support = {
    tickets: {
      pacifista_support_ticket: new PacifistaSupportTicketCrudClient(),
      pacifista_support_ticket_message:
        new PacifistaSupportTicketMessageCrudClient(),
    },
  };

  public web = {
    news: {
      pacifista_news: new PacifistaNewsCrudClient(),
    },
    shop: {
      articles: {
        shop_articles: new ShopArticlesCrudClient(),
      },
      categories: {
        shop_categories: new ShopCategoriesCrudClient(),
      },
    },
  };
}
