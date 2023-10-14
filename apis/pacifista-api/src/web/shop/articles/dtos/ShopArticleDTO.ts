import { ApiDTO } from "funixproductions-apis-core";
import { ShopCategoryDTO } from "../../categories/dtos/ShopCategoryDTO";

export class ShopArticleDTO extends ApiDTO {
  category!: ShopCategoryDTO;
  name!: string;
  description!: string;
  htmlDescription!: string;
  logoUrl!: string;
  price!: number;
}
