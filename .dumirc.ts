import { defineConfig } from 'dumi'
import type { IDumiUserConfig } from 'dumi/dist/types'

const config: IDumiUserConfig = {
  outputPath: 'docs-dist',
  autoAlias: true, // 文档读取源码
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'components', dir: 'src/components' },
      { type: 'functions', subType: 'api', dir: 'src/api' },
      { type: 'functions', subType: 'util', dir: 'src/utils' },
      { type: 'functions', subType: 'hook', dir: 'src/hooks' },
      { type: 'functions', subType: 'constant', dir: 'src/constant' },
    ],
    entryFile: './src/index.ts',
  },
  apiParser: {
    unpkgHost: 'https://unpkg.com',
    resolveFilter: () => {
      return true
    },
  },
  styles: [
    `.dumi-default-navbar > li {font-size: 16px !important; line-height: normal !important;}`,
    `.dumi-default-header-left { display: flex }`,
    `.dumi-default-logo {font-weight: normal !important}`,
    `.dumi-default-navbar-dropdown {display: flex;flex-direction: column;gap: 6px;}`,
    `* {font-family: 'Kaiti SC', 'Songti SC', 'PingFang SC', cursive, sans-serif;}`,
    `.markdown code {font-family: 'Kaiti SC', 'Songti SC', 'PingFang SC', cursive, sans-serif !important;}`,
  ],
  themeConfig: {
    logo: '/logo.png',
    name: 'Doraemon',
    nav: {
      mode: 'append',
      value: [
        {
          title: ' 更多',
          children: [
            { title: '河泽冰', link: 'https://www.hezebin.com' },
            { title: 'Chat', link: 'https://chat.hezebin.com' },
          ],
        },
      ],
    },
    footer: 'Made with ❤️ by hezebin',
    socialLinks: {
      github: 'https://github.com/ihezebin/doraemon',
    },
    showLineNum: true,
  },
}

export default defineConfig(config)
