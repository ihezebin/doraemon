---
title: 常量 
nav:
  title: 函数
  order: 2
---

# 常量

## ENV
```tsx | pure
/**
 * 通常使用检查是否处于开发环境
 * if (process.env.NODE_ENV === DEV) {
 *   console.log('处于开发环境');
 * }
 */
export const ENV_DEV: string = 'development'
export const ENV_PROD: string = 'production'
```

## REGEX
```tsx | pure
export const REGEX_PHONE = /^1[3456789]\d{9}$/

export const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
```

## HEZEBIN
```tsx | pure
export const HEZEBIN_DOMAIN_HEZEBIN = '.hezebin.com'
export const HEZEBIN_DOMAIN_HEZEBIN_HOME = 'www.hezebin.com'
export const HEZEBIN_DOMAIN_HEZEBIN_SSO = 'sso.hezebin.com'
export const HEZEBIN_DOMAIN_HEZEBIN_SSO_LOGIN = 'sso.hezebin.com/login'

export const KEY_TOKEN = 'token'
```
