import { defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "en-US",
  description: "Keep watch of your bundle size",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarGuide() },
      "/reference/": {
        base: "/reference/",
        items: sidebarReference(),
      },
    },

    editLink: {
      pattern: "https://github.com/bundlewatch/bundlewatch.io/edit/master/docs/:path",
      text: "Edit this page on GitHub",
    },

    outline: {
      level: "deep",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © ${new Date().getFullYear()} bundlewatch`,
    },
  },
});

function nav() {
  return [
    {
      text: "Guide",
      link: "/guide/what-is-it",
      activeMatch: "/guide/",
    },
    {
      text: "Reference",
      link: "/reference/configuration",
      activeMatch: "/reference/",
    },
    {
      text: "0.4.0",
      items: [
        {
          text: "Release Notes",
          link: "https://github.com/bundlewatch/bundlewatch/releases/tag/v0.4.0",
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
      text: "introduce",
      items: [
        { text: "What is it?", link: "what-is-it" },
        { text: "Getting Started", link: "getting-started" },
        { text: "Using bundlewatch", link: "using-bundlewatch" },
        { text: "Using a config file", link: "using-a-config-file" },
        {
          text: "Diffing against branches other than master",
          link: "diffing-against-branches-other-than-master",
        },
        { text: "Using a custom server", link: "using-a-custom-server" },
      ],
    },
  ];
}

function sidebarReference() {
  return [
    {
      text: "Reference",
      items: [
        { text: "Configuration", link: "configuration" },
        { text: "NodeJS API", link: "nodejs" },
        { text: "CLI Params", link: "cli" },
      ],
    },
  ];
}
