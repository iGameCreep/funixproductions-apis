import {PageOption, Paginated} from "../../dtos/paginated";
import {ApiDTO} from "../../dtos/api-dto";
import {callApi, HttpMethods} from './caller';
import {ApiBaseUrl} from "../../../apis";
import {Pagination} from "../../dtos/pagination";

export abstract class CrudHttpClient<DTO extends ApiDTO> {

  protected readonly url: string;

  protected constructor(
    protected readonly domain: ApiBaseUrl,
    protected readonly path: string,
    protected readonly apiKey?: string
  ) {
    this.url = domain + path;
  }

  /**
   * Find and search
   * @param options set the data returned amount
   */
  find(options: PageOption, searchParams: URLSearchParams): Promise<Paginated<DTO>> {
    const params: Pagination = {
      page: options.page,
      elemsPerPage: options.elemsPerPage || 10,
      sort: options.sort!,
      search: options.search
    };

    return callApi<DTO>(HttpMethods.GET, this.url, {options: params, params: searchParams});
  }

  getById(id: string, options: PageOption, searchParams: URLSearchParams): Promise<Paginated<DTO>> {
    const params: Pagination = {
      page: options.page,
      elemsPerPage: options.elemsPerPage || 10,
      sort: options.sort!,
      search: options.search
    };

    return callApi<DTO>(HttpMethods.GET, this.url + '/' + id, {options: params, params: searchParams});
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
    const httpParams = new URLSearchParams();
    httpParams.append('id', id);
    return callApi(HttpMethods.DELETE, this.url, {params: httpParams}, this.apiKey);
  }
}