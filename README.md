# doraemon

[河泽冰](https://www.hezebin.com)  下一些常用的组件、工具函数、常量等，基于 dumi 构建，并引入 vite 解决组件库庞大后在开发阶段的调试热更新缓慢的问题。

## 开发

```bash
# install dependencies
$ yarn install

# develop library by vite
$ yarn dev

# develop library by docs demo
$ yarn start

# build library source code
$ yarn run build

# build library source code in watch mode
$ yarn run build:watch

# build docs
$ yarn run docs:build

# Locally preview the production build.
$ yarn run docs:preview

# check your project for potential problems
$ yarn run doctor
```

## 发布

1.切换npm源为官方:

```bash
yrm use npm
```

或

```bash
npm config set registry https://registry.npmjs.org
```

2.登录

```bash
npm login
```

```
# Username: ihezebin
# Email: 86744316@qq.com
```

3.发布

```bash
npm publish --access public
```

4.发布结束后切回淘宝源

```bash
yrm use taobao
```

或

```bash
npm config set registry  https://registry.npmmirror.com/
```

## 使用

```bash
yarn add @hezebin/doraemon
```

```js
import { Test } from '@hezebin/doraemon';

<Test></Test>
```

## LICENSE

MIT
