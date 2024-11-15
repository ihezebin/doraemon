import type { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios';

interface Response<T> {
    status?: number;
    code: number | string;
    message: string;
    data?: any;
    response?: AxiosResponse<T>;
}
interface IApi {
    request<T = any, R = Response<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
    head<T = any, R = Response<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    options<T = any, R = Response<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    get<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    delete<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    post<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    put<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    patch<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    postForm<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    putForm<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    patchForm<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
}
export interface Error extends Partial<Response<any>> {
    error: any;
}
interface Config extends CreateAxiosDefaults {
    onRequest?: (request: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
    onResponse?: (response: Response<any>) => Response<any>;
    /**
     * onError
     * @param err 必含字段 code 和 message, 当为 500 这类非正常响应错误时 status 和 response 非空, 否则预期之外的错误仅含必须字段值
     */
    onError?: (err: Error) => any;
    withToken?: () => string;
}
export declare class Api implements IApi {
    config: Config;
    private kernel;
    constructor(config: Config);
    request<T = any, R = Response<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
    head<T = any, R = Response<T>, D = any>(url: string, config?: AxiosRequestConfig<D> | undefined): Promise<R>;
    options<T = any, R = Response<T>, D = any>(url: string, config?: AxiosRequestConfig<D> | undefined): Promise<R>;
    get<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R>;
    delete<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R>;
    post<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R>;
    put<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R>;
    patch<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R>;
    postForm<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R>;
    putForm<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R>;
    patchForm<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R>;
}
export declare const newApi: (config?: Config | string) => Api;
export {};
