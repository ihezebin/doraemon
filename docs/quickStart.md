---
sidemenu: false
sidebar: false
title: 快速开始
nav: 
  title: 快速开始
  order: 0
---
# 快速开始

## 安装

使用 npm 或 yarn 安装
<InstallDependencies
yarn='$ yarn add @hezebin/doraemon'
npm='$ npm install @hezebin/doraemon --save'
/>
</InstallDependencies>
如果你的网络环境不佳，推荐使用 `yrm` 将镜像仓库地址切换为 `taobao`。

## 示例
```tsx | pure
import { Button } from '@hezebin/doraemon';

ReactDOM.render(<Button />, mountNode);
```

## 类型提示
`Doraemon` 使用 `TypeScript` 进行书写并提供了完整的定义文件。
