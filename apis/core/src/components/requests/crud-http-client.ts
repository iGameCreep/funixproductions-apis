import { PageOption, Paginated } from "../../dtos/paginated";
import { ApiDTO } from "../../dtos/api-dto";
import { callApi, HttpMethods } from "./caller";

/**
 * Represents an abstract base class for making CRUD (Create, Read, Update, Delete) HTTP requests.
 * @template DTO - The data transfer object type that this class operates on.
 */
export abstract class CrudHttpClient<DTO extends ApiDTO> {
  /**
   * The base URL for the API domain.
   * @protected
   * @readonly
   */
  protected readonly url: string;

  /**
   * Creates a new instance of the CrudHttpClient class.
   * @param {string} domain - The base URL for the API domain.
   * @param {string} path - The path for the API endpoint.
   */
  protected constructor(
    protected readonly domain: string,
    protected readonly path: string
  ) {
    this.url = domain + path;
  }

  /**
   * Find and search for data.
   * @param {PageOption} options - Options to configure the data retrieval, including pagination and sorting.
   * @returns {Promise<Paginated<DTO>>} - A promise that resolves with paginated data of type DTO.
   */
  find(options: PageOption): Promise<Paginated<DTO>> {
    const params: PageOption = {
      page: options.page,
      elemsPerPage: options.elemsPerPage || 10,
      sort: options.sort,
      search: options.search,
    };

    return callApi<DTO>(HttpMethods.GET, this.url, { options: params });
  }

  /**
   * Get data by ID.
   * @param {string} id - The unique identifier for the data.
   * @param {PageOption} options - Options to configure the data retrieval, including pagination and sorting.
   * @returns {Promise<Paginated<DTO>>} - A promise that resolves with paginated data of type DTO.
   */
  getById(id: string, options: PageOption): Promise<Paginated<DTO>> {
    const params: PageOption = {
      page: options.page,
      elemsPerPage: options.elemsPerPage || 10,
      sort: options.sort,
      search: options.search,
    };

    return callApi<DTO>(HttpMethods.GET, this.url + "/" + id, {
      options: params,
    });
  }

  /**
   * Create a new data record.
   * @param {DTO} dto - The data transfer object to be created.
   * @returns {Promise<Paginated<DTO>>} - A promise that resolves with paginated data of type DTO.
   */
  create(dto: DTO): Promise<Paginated<DTO>> {
    return callApi<DTO>(HttpMethods.POST, this.url, { data: dto });
  }

  /**
   * Patch (partially update) an existing data record.
   * @param {DTO} dto - The data transfer object to be updated.
   * @returns {Promise<Paginated<DTO>>} - A promise that resolves with paginated data of type DTO.
   */
  patch(dto: DTO): Promise<Paginated<DTO>> {
    return callApi<DTO>(HttpMethods.PATCH, this.url, { data: dto });
  }

  /**
   * Update (replace) an existing data record.
   * @param {DTO} dto - The data transfer object to be updated.
   * @returns {Promise<Paginated<DTO>>} - A promise that resolves with paginated data of type DTO.
   */
  update(dto: DTO): Promise<Paginated<DTO>> {
    return callApi<DTO>(HttpMethods.PUT, this.url, { data: dto });
  }

  /**
   * Delete a data record by ID.
   * @param {string} id - The unique identifier for the data to be deleted.
   * @returns {Promise<any>} - A promise that resolves with the result of the delete operation.
   */
  delete(id: string): Promise<any> {
    const httpParams = new URLSearchParams();
    httpParams.append("id", id);
    return callApi(HttpMethods.DELETE, this.url, { params: httpParams });
  }
}
