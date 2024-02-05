import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["api", "src", "!src/**/*.test.ts"],
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  outDir: "build",
  format: "esm",
  outExtension: () => ({ js: ".js" }),
});
