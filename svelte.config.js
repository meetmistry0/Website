import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    target: "#svelte",
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
    }),
  },

  preprocess: [mdsvex(mdsvexConfig)],
};

export default config;
