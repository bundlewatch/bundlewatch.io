import { defineConfig } from "vitepress";
import pkg from '../../../package.json' with { type: 'json' }

export const zh = defineConfig({
  lang: "zh-Hans",
  description: "观测你的包裹大小",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/zh/guide/": { base: "/zh/guide/", items: sidebarGuide() },
      "/zh/reference/": {
        base: "/zh/reference/",
        items: sidebarReference(),
      },
    },

    editLink: {
      pattern:
        "https://github.com/bundlewatch/bundlewatch.io/edit/master/docs/:path",
      text: "在GitHub上编辑此页面",
    },

    outline: {
      level: "deep",
    },

    footer: {
      message: "根据 MIT 许可证发布。",
      copyright: `版权所有 © 2018-至今 BundleWatch`,
    },
  },
});

function nav() {
  return [
    {
      text: "指南",
      link: "/zh/guide/what-is-it",
      activeMatch: "/zh/guide/",
    },
    {
      text: "参考",
      link: "/zh/reference/configuration",
      activeMatch: "/zh/reference/",
    },
    {
      text: pkg.bundlewatch.version,
      items: [
        {
          text: "Release Notes",
          link: "https://github.com/bundlewatch/bundlewatch/releases/tag/v0.4.1",
          target: "_blank",
        },
        {
          text: "Contributing",
          link: "https://github.com/bundlewatch/bundlewatch/blob/master/CONTRIBUTING.md",
          target: "_blank",
        },
      ],
    },
  ];
}

function sidebarGuide() {
  return [
    {
      text: "介绍",
      items: [
        { text: "这是什么？", link: "what-is-it" },
        { text: "快速开始", link: "getting-started" },
      ],
    },
    {
      text: "如何使用",
      items: [
        { text: "使用 BundleWatch", link: "using-bundlewatch" },
        { text: "使用配置文件", link: "using-a-config-file" },
        {
          text: "对比非主分支的构建差异",
          link: "diffing-against-branches-other-than-master",
        },
        { text: "使用自定义服务器", link: "using-a-custom-server" },
      ],
    },
    {
      text: "配置、API 和 CLI 参考",
      base: "/zh/reference/",
      link: "/configuration",
    },
  ];
}

function sidebarReference() {
  return [
    {
      text: "参考",
      items: [
        { text: "配置项", link: "configuration" },
        { text: "NodeJS API", link: "nodejs" },
        { text: "CLI 参数", link: "cli" },
      ],
    },
  ];
}
