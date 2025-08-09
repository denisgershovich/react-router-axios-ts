import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import axiosProvider from "./axiosProvider";
import { getGlobalQueryParams } from "./globalQueryParams";

type InterceptorHandlers<T> = {
  beforeRequest?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  requestError?: (error: Error | AxiosError) => void | Promise<void>;
  afterResponse?: (
    response: AxiosResponse<T>
  ) => AxiosResponse<T> | Promise<AxiosResponse<T>>;
  responseError?: (error: Error | AxiosError) => void | Promise<void>;
};

export default class BaseApi<T> {
  protected api: AxiosInstance;

  constructor(baseUrl: string, slug = "") {
    this.api = axiosProvider(`${baseUrl}${slug}`);
    this.setInterceptors({
      beforeRequest: this._beforeRequest.bind(this),
      requestError: this._requestError.bind(this),
      afterResponse: this._afterResponse.bind(this),
      responseError: this._responseError.bind(this),
    });
  }

  private setInterceptors(handlers: InterceptorHandlers<T>): void {
    this.api.interceptors.request.use(
      handlers.beforeRequest,
      handlers.requestError
    );
    this.api.interceptors.response.use(
      handlers.afterResponse,
      handlers.responseError
    );
  }

  protected _beforeRequest(
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig {
    const params = getGlobalQueryParams();

    config.params = {
      ...config.params,
      ...params,
    };

    return config;
  }

  protected _requestError(error: Error | AxiosError): Promise<void> {
    return Promise.reject(error);
  }

  protected _afterResponse(response: AxiosResponse<T>): AxiosResponse<T> {
    return response;
  }

  protected _responseError(error: Error | AxiosError): Promise<void> {
    return Promise.reject(error);
  }
}
