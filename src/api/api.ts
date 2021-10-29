import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { RequestsType } from './types';

const REQUEST_NOT_FOUND = 'REQUEST_NOT_FOUND';

export default class API {
  private client: AxiosInstance;

  private requests: RequestsType;

  constructor(baseURL: string, requests: RequestsType) {
    this.client = axios.create({ baseURL, withCredentials: true });
    this.requests = requests;
  }

  async createRequest(
    requestName: string,
    data?: Record<string, unknown>,
  ): Promise<AxiosResponse | never> {
    const request = this.requests[requestName];

    if (!request) {
      throw new Error(REQUEST_NOT_FOUND);
    }

    const { method, url } = request;

    try {
      const response = await this.client[method](url, data);

      return response as AxiosResponse;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
