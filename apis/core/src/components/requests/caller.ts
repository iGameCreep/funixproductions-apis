import axios, { AxiosError, AxiosInstance } from "axios";
import { Paginated, PageOption } from "../../dtos/paginated";
import { ApiDTO } from "../../dtos/api-dto";

const axiosInstance: AxiosInstance = axios.create();

var apiKey: string = "";

export function setApikey(apikey: string) {
  apiKey = apikey;
}

export async function callApi<DTO extends ApiDTO>(
  method: HttpMethods,
  url: string,
  options: RequestOptions = {}
): Promise<Paginated<DTO>> {
  const headers = {
    Authorization: `Bearer ${apiKey}`,
  };

  try {
    const response = await axiosInstance.request<Paginated<DTO>>({
      method,
      url: buildUrl(url, options.params, options.options),
      headers,
      data: options.data,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const statusCode = axiosError.response?.status;
      const data = axiosError.response?.data;
      const errorMessage = `API call failed: ${method} ${url} - Status ${statusCode}: ${data}`;
      throw new ApiError(errorMessage, statusCode, data);
    } else {
      throw new ApiError("API call failed: Unknown error");
    }
  }
}

function buildUrl(
  baseURL: string,
  params?: URLSearchParams,
  options?: PageOption
): string {
  let url = baseURL + "?";

  if (params) {
    url += "&" + params.toString();
  }

  if (options) {
    if (options.page) {
      url += `&page=${options.page}`;
    }

    if (options.elemsPerPage) {
      url += `&elemsPerPage=${options.elemsPerPage}`;
    }

    if (options.search) {
      url += `&search=${options.search}`;
    }

    if (options.sort) {
      url += `&sort=${options.sort}`;
    }
  }

  return url;
}

interface RequestOptions {
  options?: PageOption;
  data?: ApiDTO;
  params?: URLSearchParams;
}

export enum HttpMethods {
  DELETE = "DELETE",
  GET = "GET",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT",
}

class ApiError extends Error {
  statusCode?: number;
  data?: any;

  constructor(message: string, statusCode?: number, data?: any) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.data = data;
  }
}
