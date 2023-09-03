import {CrudHttpClient} from "../requests/crud-http-client";
import {PageOption, Paginated} from "../../dtos/paginated";
import {QueryBuilder, QueryParam} from "../query.builder";
import {ApiDTO} from "../../dtos/api-dto";
import { HttpParamBuilder } from "../httpquery";

export abstract class ListComponent<DTO extends ApiDTO, SERVICE extends CrudHttpClient<DTO>> {

  entities: Paginated<DTO> = new Paginated<DTO>();
  page: number = 0;
  elemsPerPage: number = 15;

  protected queryBuilder: QueryBuilder = new QueryBuilder();
  protected pageOption: PageOption = new PageOption();

  protected constructor(protected service: SERVICE, defaultSort: string = 'createdAt:desc') {
    this.pageOption.sort = defaultSort;
    this.pageOption.page = this.page;
    this.pageOption.elemsPerPage = this.elemsPerPage;
    this.updateList();
  }

  updateSort(data: string): void {
    this.pageOption.sort = data;
    this.updateList();
  }

  onSearchChange(champ: string, data: string | string[], queryType: string = QueryBuilder.like): void {
    const queryParam: QueryParam = new QueryParam();
    queryParam.key = champ;
    queryParam.type = queryType;
    queryParam.value = data;

    this.queryBuilder.addParam(queryParam);
    this.updateList();
  }

  onPaginateChange(pageIndex: number): void {
    this.page = pageIndex;
    this.pageOption.page = this.page;

    this.updateList();
  }

  updateList(): void {
    const options = this.pageOption;
    options.search = this.queryBuilder;
    this.service.find(this.pageOption, new HttpParamBuilder()).then((data: Paginated<DTO>) => {
      this.entities = data;
    });
  }

}