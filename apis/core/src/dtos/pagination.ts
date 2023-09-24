/**
 * Represents pagination parameters for controlling data retrieval and display.
 */
export class Pagination {
  /**
   * The page number to retrieve.
   */
  page: number = 0;

  /**
   * The number of elements to display per page.
   */
  elemsPerPage: number = 10;

  /**
   * A search query to filter the data.
   */
  search: string = '';

  /**
   * The sorting criteria for the data.
   */
  sort: string = '';

  /**
   * Creates a new instance of the Pagination class.
   * @param {number} [page] - The page number to retrieve. Default is 0.
   * @param {number} [elemsPerPage] - The number of elements to display per page. Default is 10.
   * @param {string} [search] - A search query to filter the data. Default is an empty string.
   * @param {string} [sort] - The sorting criteria for the data. Default is an empty string.
   */
  constructor(page?: number, elemsPerPage?: number, search?: string, sort?: string) {
    if (page) this.page = page;
    if (elemsPerPage) this.elemsPerPage = elemsPerPage;
    if (search) this.search = search;
    if (sort) this.sort = sort;
  }
}