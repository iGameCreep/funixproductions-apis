import { ApiDTO } from "./api-dto";

export class Paginated<DTO extends ApiDTO> {
  content: DTO[] = [];
  actualPage: number = 0;
  totalPages: number = 1;
  totalElementsThisPage: number = 0;
  totalElementsDatabase: number = 0;
}

/**
 * Represents a configuration object for managing page options.
 */
export class PageOption {
  /**
   * Constructs a new PageOption object with optional initial values.
   * @param {number} [elemsPerPage=15] - The number of elements to display per page (default: 15).
   * @param {number} [page=0] - The current page number (default: 0).
   * @param {string} [sort=''] - The sorting criteria (default: '').
   * @param {string} [search=''] - The search query string (default: '').
   */
  constructor(
    public elemsPerPage: number = 15,
    public page: number = 0,
    public sort: string = "",
    public search: string = ""
  ) {}
}
