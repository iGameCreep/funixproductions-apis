import {PageOption, Paginated} from "../../dtos/paginated";
import {ApiDTO} from "../../dtos/api-dto";
import {callApi, HttpMethods} from './caller';
import {ApiBaseUrl} from "../../../apis";
import {Pagination} from "../../dtos/pagination";

export abstract class CrudHttpClient<DTO extends ApiDTO> {

  protected readonly url: string;

  protected constructor(
    protected readonly domain: ApiBaseUrl,
    protected readonly path: string
  ) {
    this.url = domain + path;
  }

  /**
   * Find and search
   * @param options set the data returned amount
   */
  find(options: PageOption): Promise<Paginated<DTO>> {
    const params: Pagination = {
      page: options.page,
      elemsPerPage: options.elemsPerPage || 10,
      sort: options.sort!,
      search: options.search
    };

    return callApi<DTO>(HttpMethods.GET, this.url, {options: params});
  }

  getById(id: string, options: PageOption): Promise<Paginated<DTO>> {
    const params: Pagination = {
      page: options.page,
      elemsPerPage: options.elemsPerPage || 10,
      sort: options.sort!,
      search: options.search
    };

    return callApi<DTO>(HttpMethods.GET, this.url + '/' + id, {options: params});
  }

  create(dto: DTO): Promise<Paginated<DTO>> {
    return callApi<DTO>(HttpMethods.POST, this.url, {data: dto});
  }

  patch(dto: DTO): Promise<Paginated<DTO>> {
    return callApi<DTO>(HttpMethods.PATCH, this.url, {data: dto});
  }

  update(dto: DTO): Promise<Paginated<DTO>> {
    return callApi<DTO>(HttpMethods.PUT, this.url, {data: dto});
  }

  delete(id: string): Promise<any> {
    const httpParams = new URLSearchParams();
    httpParams.append('id', id);
    return callApi(HttpMethods.DELETE, this.url, {params: httpParams});
  }
}