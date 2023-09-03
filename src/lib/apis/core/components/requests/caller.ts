import {Axios, AxiosError} from 'axios';
import {Pagination} from '../../dtos/pagination';
import {Paginated} from '../../dtos/paginated';
import {ApiDTO} from '../../dtos/api-dto';
import {HttpParamBuilder} from '../httpquery';

export async function callApi<DTO extends ApiDTO>(method: HttpMethods, url: string, options: RequestOptions, apiKey?: string): Promise<Paginated<DTO>> {
  const axios = new Axios();
  const headers = {
    'Authorization': `Bearer ${apiKey ?? ''}`
  };

  return new Promise<Paginated<DTO>>((resolve, reject) => {
    axios
      .request<Paginated<DTO>>({
        method,
        url: url + (options.params ? '?' + options.params.queryArray.toString() : ''),
        headers,
        data: options.data
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          reject(new ApiError('API call failed', error.response.status, error.response.data));
        } else if (error.request) {
          reject(new ApiError('API call failed', undefined, 'No response received'));
        } else {
          reject(new ApiError('API call failed', undefined, 'Unknown error'));
        }
      });
  });  
}

interface RequestOptions {
  options?: Pagination;
  data?: ApiDTO;
  params?: HttpParamBuilder;
}

export enum HttpMethods {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT'
}

class ApiError extends Error {
  statusCode?: number;
  data?: string;
  constructor(message: string, statusCode?: number, data?: any) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.data = data;
  }
}