import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  coverageProvider: "v8",
  rootDir: "src",
  setupFiles: ["<rootDir>/config/jest.setup.ts"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};

export default config;
