import { defineThemeConfig } from '@hezebin/dumi-theme-antd/dist/defineThemeConfig';
import { defineConfig } from 'dumi';
import type { IDumiUserConfig } from 'dumi/dist/types';
// @ts-ignore
import pkgJSON from './package.json';

const config: IDumiUserConfig = {
  outputPath: 'docs-dist',
  autoAlias: true, // 文档读取源码
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      // { type: 'components', dir: 'src/components' },
      // { type: 'functions', subType: 'api', dir: 'src/api' },
      // { type: 'functions', subType: 'util', dir: 'src/utils' },
      // { type: 'functions', subType: 'hook', dir: 'src/hooks' },
      // { type: 'functions', subType: 'constant', dir: 'src/constant' },
    ],
    entryFile: './src/index.ts',
  },
  apiParser: {
    unpkgHost: 'https://unpkg.com',
    resolveFilter: () => {
      return true;
    },
  },
  styles: [
    `html * {font-family: 'Kaiti SC', 'Songti SC', 'PingFang SC', cursive, sans-serif !important;}`,
    `.hidden-sidebar {padding: 64px;}`,
  ],
  themeConfig: defineThemeConfig({
    logo: '/logo.png',
    rtl: false,
    name: '哆啦 A 梦',
    title: 'Doraemon',
    description: '河泽冰生态系列下使用的 React 组件及工具函数库',
    bannerConfig: {
      showBanner: true,
      bannerMobileImgUrl:
        'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JmlaR5oQn3MAAAAAAAAAAAAADrJ8AQ/original',
      bannerImgUrl: '',
    },
    docVersions: {
      [pkgJSON.version]: '',
    },
    moreLinks: [
      {
        text: '河泽冰',
        link: 'https://www.hezebin.com',
      },
      {
        text: 'Chat',
        link: 'https://chat.hezebin.com',
      },
    ],
    actions: [
      {
        type: 'primary',
        text: '快速开始',
        link: '/quick-start',
      },
      {
        text: '组件',
        link: '/component',
      },
    ],
    footer: '❤️ Powered by hezebin',
    github: 'https://github.com/ihezebin/doraemon',
    features: [
      {
        title: '内置全文搜索',
        details:
          '不需要接入任何三方服务，标题、正文、demo 等内容均可被搜索，支持多关键词搜索，且不会带来产物体积的增加。',
      },
      {
        title: '更好的编译性能',
        details:
          '通过结合使用 Umi 4 MFSU、esbuild、SWC、持久缓存等方案，带来比 dumi 1.x 更快的编译速度。',
      },
      {
        title: 'SSR',
        details:
          '全面支持 SSR，让文档具有更好的首屏加载速度、更好的SEO效果、更快的内容到达率。',
      },
      {
        title: '样式风格统一',
        details:
          '基于 antd 5.0 CSS-in-JS 样式加持，全面统一 dumi 内置样式，同时支持自定义主题加载。',
      },
      {
        title: '功能增强',
        details:
          '在 dumi 内置 markdown 增强基础上新增特有 FrontMatter 配置，并且内置多种组件，使文档展示效果得以提升。',
      },
      {
        title: '开箱即用',
        details:
          '接入简单，安装即使用，全面融入 Ant Design 风格，内置主题切换，紧凑模式等功能。',
      },
    ],
    showLineNum: true,
  }),
};

export default defineConfig(config);
