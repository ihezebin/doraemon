---
title: 工具库
nav:
  title: 函数
  order: 2
---
# utils


## 本地存储

### getLocalItem
从本地存储中取一项值, 如果不存在则返回 null, 存在则返回对应的值, 若存储的字符串为 JSON 格式则返回值为 JSON
```tsx | pure
export const getLocalItem = (
  key: string
):any=> {
  const val = localStorage.getItem(key)
  if (val === null) return null
  try {
    return JSON.parse(val)
  } catch (e) {
    return val
  }
}

```

### setLocalItem
设置一项值到本地存储, 若值为 null 则删除该项, 否则将值转为 JSON 字符串
```tsx | pure
export const setLocalItem = (key: string, item?: any)=> {
  if (item === undefined || item === null) {
    return localStorage.removeItem(key)
  }
  return localStorage.setItem(key, JSON.stringify(item))
}
```

## 正则判断

### isPhoneNumber
是否为手机号
```tsx | pure
export const isPhoneNumber = (str: string) => /^1[3456789]\d{9}$/.test(str)
```

### isEmail
是否为邮箱
```tsx | pure
export const isEmail = (str: string) => /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str)
```

## 时间处理

### getTimePeriod
获取当前时间的时段中文
```tsx | pure
export const getTimePeriod = (hour: number): string => {
  if (hour >= 0 && hour < 6) {
    return '凌晨'
  } else if (hour >= 6 && hour < 12) {
    return '早上'
  } else if (hour === 12) {
    return '中午'
  } else if (hour >= 13 && hour < 18) {
    return '下午'
  } else {
    return '晚上'
  }
}
```

### formatTime2Normal
格式化时间为 YYYY-MM-DD HH:mm:ss
```tsx | pure
export const formatTime2Normal = (time: number | string, justDay?: boolean): string => {
  return dayjs(time).format(!justDay ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD')
}
```

### formatTime2CN
格式化时间为 YYYY年MM月DD日
```tsx | pure
export const formatTime2CN = (time: number | string, justDay?: boolean): string => {
  return dayjs(time).format(!justDay ? 'YYYY年MM月DD日 HH时mm分ss秒' : 'YYYY年MM月DD日')
}

```

## 类型判断

```tsx | pure
export const isObject = (value: unknown): value is Record<any, any> => value !== null && typeof value === 'object'
export const isFunction = (value: unknown): value is (...args: any) => any => typeof value === 'function'
export const isString = (value: unknown): value is string => typeof value === 'string'
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'
export const isNumber = (value: unknown): value is number => typeof value === 'number'
export const isUndef = (value: unknown): value is undefined => typeof value === 'undefined'
```

## 编码

### base64Encode

```tsx | pure
export const base64urlEncode = (data: string): string => {
  // 将字符串转换为 Base64
  const base64 = btoa(data);
  // 替换 URL 不安全字符并移除填充符号（=）
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

export const base64urlDecode = (data: string): string => {
  // 还原 URL 不安全字符并补齐填充符号
  const base64 = data.replace(/-/g, '+').replace(/_/g, '/');
  const padding =
    base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4));
  return atob(base64 + padding);
};

```
