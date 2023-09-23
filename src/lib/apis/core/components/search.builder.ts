/**
 * Represents search types for constructing search queries.
 */
export enum SearchTypes {
  LIKE = ":like:",
  EQUAL = ":eq:",
  NOT_EQUAL = ":neq:",
  GREATER = ":gt:",
  LOWER = ":lt:",
}

/**
 * Represents a search parameter used for constructing search queries.
 */
export class SearchParam {
  /**
   * The key associated with the search parameter.
   */
  key: string = "";

  /**
   * The search type to be used for the parameter. Default is "EQUAL".
   */
  type: SearchTypes = SearchTypes.EQUAL;

  /**
   * The value or values associated with the search parameter.
   */
  value?: string | string[];
}

/**
 * Represents a builder for constructing search queries using search parameters.
 */
export class SearchBuilder {
  /**
   * An array of search parameters to be used in the query.
   */
  queryArray: SearchParam[] = [];

  /**
   * Gets the constructed search query as a string.
   * @returns {string} The constructed search query.
   */
  get(): string {
    if (this.queryArray.length <= 0) {
      return "";
    }
    const queryList: string[] = [];
    this.queryArray.forEach((it) => {
      if (Array.isArray(it.value)) {
        if (it.value.length === 1) {
          queryList.push(it.key + it.type + it.value[0]);
        } else {
          queryList.push(it.key + it.type + "[" + it.value.join("|") + "]");
        }
      } else {
        queryList.push(it.key + it.type + it.value);
      }
    });
    return queryList.join(",");
  }

  /**
   * Adds a search parameter to the builder, optionally replacing an existing parameter with the same key.
   * @param {SearchParam} param - The search parameter to add.
   * @returns {SearchBuilder} The updated SearchBuilder instance.
   */
  addParam(param: SearchParam): SearchBuilder {
    if (param.key.length > 0) {
      if (!param.value || param.value.length <= 0) {
        const indexToRemove = this.queryArray.findIndex(
          (q) => q.key === param.key
        );
        if (indexToRemove >= 0) {
          this.queryArray.splice(indexToRemove, 1);
        }
      } else {
        this.addParamOnlyIfAbsent(param);
      }
    }
    return this;
  }

  /**
   * Resets the search builder by clearing all search parameters.
   */
  reset(): void {
    this.queryArray = [];
  }

  /**
   * Adds a search parameter to the builder only if a parameter with the same key does not already exist.
   * @param {SearchParam} param - The search parameter to add.
   * @private
   */
  private addParamOnlyIfAbsent(param: SearchParam): void {
    const indexToUpdate = this.queryArray.findIndex((q) => q.key === param.key);
    if (indexToUpdate >= 0) {
      this.queryArray[indexToUpdate] = param;
    } else {
      this.queryArray.push(param);
    }
  }
}
