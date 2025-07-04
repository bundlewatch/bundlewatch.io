import { defineConfig } from "vitepress";
import { shared } from "./shared.mjs";
import { en } from "./en.mjs";

const config = {
  ...shared,

  locales: {
    root: { label: "English", ...en },
  },
};

export default defineConfig(config);
