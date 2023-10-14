import { PacifistaService } from "../../../../pacifista-service";
import { ShopCategoryDTO } from "../dtos/ShopCategoryDTO";

export class ShopCategoriesCrudClient extends PacifistaService<ShopCategoryDTO> {
  constructor() {
    super("/web/shop/categories");
  }
}
