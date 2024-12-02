---
title: Api
nav:
  title: 函数
  order: 2
---

# Api

基于 [axios](https://github.com/axios/axios) 封装的网络请求方法

## 基础使用
响应结果为 `响应体` 加 `status` 和 `axios` 原始 `response` 对象，供特殊场景下使用：
```tsx | pure
import {newApi} from '@hezebin/doraemon';

const api = newApi('http://127.0.0.1:8080')
api.get('/hello', {a: '1', b: '2'})
  .then((data) => console.log('then:', data)) // {status: 200, response: {...},  ...body}
  .catch((data) => console.log('catch:', data))
```

## 请求加强
- 通过`withToken`函数返回值设置公共请求头 `Token`
- 通过`onRequest`过滤或特殊处理、使用请求参数

```tsx | pure
import {newApi} from '@hezebin/doraemon';

const api = newApi({
  baseURL: 'http://127.0.0.1:8080',
  withToken: () => {
    return token
  },
  onRequest: (request) => {
    request.params = {
      a: 1,
      b: 2,
    }
    return request
  },
})
api
  .get('/hello')
  .then((data) => console.log('then:', data))
  .catch((data) => console.log('catch:', data))
}
```

## 响应加强

```tsx | pure
import {newApi} from '@hezebin/doraemon';

const api = newApi({
  baseURL: 'http://127.0.0.1:8080',
  onResponse: (response) => {
    response.data = 'test'
    return response
  },
})
api
  .get('/hello')
  .then((data) => console.log('then:', data))
  .catch((data) => console.log('catch:', data))
```

## 错误处理
请求或响应过程中有错误发生均触发该函数

```tsx | pure
import {newApi} from '@hezebin/doraemon';

const api = newApi({
  baseURL: 'http://127.0.0.1:8080',
  onResponse: (res) => {
    if (res?.code !== 0 && res?.code !== 11) {
      message.error(res?.message)
    }
    return res
  },
  onError: (res) => {
    console.log('onError')
    if (res.status === 401) {
      setLocalItem(KEY_TOKEN)
    } else {
      if (res?.message) {
        message.error(res.message).then()
      } else {
        const resp = res.response
        notification.error({
          message: resp?.statusText,
          description: (
            <span style={{ color: 'gray', fontSize: '13px' }}>{`错误码: ${resp?.status}`}</span>
          ),
        })
      }
    }
    return res
  },
  onAbnormal: (err, code, message) => {
    console.error('onAbnormal')
    // 无响应错误处理
    notification.error({
      message: message,
      description: <span style={{ color: 'gray', fontSize: '13px' }}>{`错误码: ${code}`}</span>,
    })
    return err
  },
})

const data = await api.get('/hello_error').catch((res) => res)
console.log(data)
```
