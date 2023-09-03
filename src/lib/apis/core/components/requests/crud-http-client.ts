import {PageOption, Paginated} from "../../dtos/paginated";
import {ApiDTO} from "../../dtos/api-dto";
import {callApi, HttpMethods} from './caller';
import {ApiBaseUrl} from "../../../apis";
import {Pagination} from "../../dtos/pagination";
import {HttpParamBuilder} from "../httpquery";

export abstract class CrudHttpClient<DTO extends ApiDTO> {

  protected readonly url: string;
  protected readonly apiKey: string = '';

  protected constructor(domain: ApiBaseUrl, path: string, apiKey?: string) {
    this.url = domain + path;
    if (apiKey) this.apiKey = apiKey;
  }

  /**
   * Find and search
   * @param options set the data returned amount
   * @param httpParamBuilder can be null new HttpParamBuilder().addParam({key: "mdr", value: "mdr"})
   */
  find(options: PageOption, httpParamBuilder: HttpParamBuilder): Promise<Paginated<DTO>> {
    const params: Pagination = {
      page: options.page,
      elemsPerPage: options.elemsPerPage || 10,
      sort: options.sort!,
      search: (httpParamBuilder === null ? '' : httpParamBuilder.get())
    };

    return callApi<DTO>(HttpMethods.GET, this.url, {options: params, params: httpParamBuilder});
  }

  getById(id: string, options: PageOption, httpParamBuilder: HttpParamBuilder): Promise<Paginated<DTO>> {
    const params: Pagination = {
      page: options.page,
      elemsPerPage: options.elemsPerPage || 10,
      sort: options.sort!,
      search: (httpParamBuilder === null ? '' : httpParamBuilder.get())
    };

    return callApi<DTO>(HttpMethods.GET, this.url + '/' + id, {options: params, params: httpParamBuilder});
  }

  create(dto: DTO): Promise<Paginated<DTO>> {
    return callApi<DTO>(HttpMethods.POST, this.url, {data: dto}, this.apiKey);
  }

  patch(dto: DTO): Promise<Paginated<DTO>> {
    return callApi<DTO>(HttpMethods.PATCH, this.url, {data: dto}, this.apiKey);
  }

  update(dto: DTO): Promise<Paginated<DTO>> {
    return callApi<DTO>(HttpMethods.PUT, this.url, {data: dto}, this.apiKey);
  }

  delete(id: string): Promise<any> {
    const httpParams: HttpParamBuilder = new HttpParamBuilder().addParam({key: 'id', value: id});

    return callApi(HttpMethods.DELETE, this.url, {params: httpParams}, this.apiKey);
  }
}