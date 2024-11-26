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
interface Config extends CreateAxiosDefaults {
    onRequest?: (request: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
    onResponse?: (response: Response<any>) => Response<any>;
    /**
     * onError
     * @param 同 onResponse, 但非 2xx 状态码的响应会走该函数。
     */
    onError?: (response: Response<any>) => any;
    /**
     * onAbnormal 异常处理，如果请求未能成功发送或接收（例如网络断开、超时等）触发该函数
     * @param code 错误码
     * @param message 错误信息
     * @param err 错误对象
     */
    onAbnormal?: (err: any, code: string, message: string) => any;
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
