import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";
import coverageViteConfig from "./vite.coverage.config.js";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: coverageViteConfig,
    },
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "http://localhost:5173", 
  },
});
