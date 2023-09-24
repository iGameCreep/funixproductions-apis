import { PacifistaService } from "../../../../pacifista-service";
import { ShopArticleDTO } from "../dtos/ShopArticleDTO";

export class ShopArticlesCrudClient extends PacifistaService<ShopArticleDTO> {
  constructor() {
    super("/web/shop/articles");
  }
}
