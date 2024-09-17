import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

import { API_DEFAULT_CONFIG } from './constant'

interface Response<T> {
  status?: number
  code: number | string
  message: string
  data?: any
  response?: AxiosResponse<T>
}

interface IApi {
  request<T = any, R = Response<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>

  // Head 没有请求体。 Head 请求的目的是获取服务器响应的头部信息，而不获取实际的响应体。
  head<T = any, R = Response<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>

  // Options 请求的主要目的是询问服务器在实际请求中可以使用哪些方法（例如 GET、POST）和头部（例如 Content-Type），以确保跨域请求的安全性。在这个过程中，客户端不需要向服务器发送具体的请求体数据。
  options<T = any, R = Response<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>

  get<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>

  delete<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>

  post<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>

  put<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>

  patch<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>

  postForm<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>

  putForm<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>

  patchForm<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
}

export interface Error extends Partial<Response<any>> {
  error: any
}

interface Config extends CreateAxiosDefaults {
  onRequest?: (request: InternalAxiosRequestConfig) => InternalAxiosRequestConfig

  onResponse?: (response: Response<any>) => Response<any>

  /**
   * onError
   * @param err 必含字段 code 和 message, 当为 500 这类非正常响应错误时 status 和 response 非空, 否则预期之外的错误仅含必须字段值
   */
  onError?: (err: Error) => any

  withToken?: () => string
}

export class Api implements IApi {
  private kernel: AxiosInstance

  constructor(public config: Config) {
    const { onRequest, onResponse, onError, withToken, ...omitConfig } = config

    this.kernel = axios.create({
      ...API_DEFAULT_CONFIG,
      ...omitConfig,
    })

    const onRequestFulfilled = (request: InternalAxiosRequestConfig) => {
      // 填充 token
      const token = withToken && withToken()
      if (token) {
        request.headers.Token = token
      }
      return Promise.resolve(onRequest ? onRequest(request) : request)
    }

    const onRequestRejected = (err: any) => {
      return Promise.reject(onError ? onError({ error: err }) : err)
    }

    this.kernel.interceptors.request.use(onRequestFulfilled, onRequestRejected)

    const onResponseFulfilled = (response: AxiosResponse) => {
      const { status, data } = response

      const resp = {
        response: response,
        status: status,
        ...data,
      }

      return onResponse ? onResponse(resp) : resp
    }

    const onResponseRejected = (err: any) => {
      if (err.response) {
        const {
          status,
          statusText,
          data: { code, message, data },
        } = err.response
        const response: Response<any> = {
          status: status,
          response: err.response,
          message: message || statusText,
          code: code,
          data: data || {},
        }
        return onError ? onError({ ...response, error: err }) : response
      } else {
        const response: Response<any> = {
          message: err?.message,
          code: err?.code,
        }
        return Promise.reject(onError ? onError({ error: err }) : response)
      }
    }

    this.kernel.interceptors.response.use(onResponseFulfilled, onResponseRejected)
  }

  request<T = any, R = Response<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R> {
    return this.kernel.request(config)
  }

  head<T = any, R = Response<T>, D = any>(url: string, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    return this.kernel.head(url, config)
  }

  options<T = any, R = Response<T>, D = any>(url: string, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    return this.kernel.options(url, config)
  }

  get<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    return this.kernel.get(url, {
      params: data,
      ...config,
    })
  }

  delete<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    return this.kernel.delete(url, {
      params: data,
      ...config,
    })
  }

  post<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    return this.kernel.post(url, data, config)
  }

  put<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    return this.kernel.put(url, data, config)
  }

  patch<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    return this.kernel.patch(url, data, config)
  }

  postForm<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    return this.kernel.postForm(url, data, config)
  }

  putForm<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    return this.kernel.putForm(url, data, config)
  }

  patchForm<T = any, R = Response<T>, D = any>(url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined): Promise<R> {
    return this.kernel.patchForm(url, data, config)
  }
}

export const newApi = (config?: Config | string) => {
  let cfg: Config = {}
  if (typeof config === 'string') {
    cfg.baseURL = config
  } else {
    cfg = config || {}
  }
  const api = new Api({
    ...cfg,
  })

  return api
}
