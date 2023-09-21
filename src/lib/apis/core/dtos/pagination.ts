export class Pagination {
    page: number = 0;
    elemsPerPage: number = 10;
    search: string = '';
    sort: string = '';

    constructor(page?: number, elemsPerPage?: number, search?: string, sort?: string) {
        if (page) this.page = page;
        if (elemsPerPage) this.elemsPerPage = elemsPerPage;
        if (search) this.search = search;
        if (sort) this.sort = sort;
    }
}