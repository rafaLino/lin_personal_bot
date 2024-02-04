import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  coverageProvider: "v8",
  rootDir: "api",
  setupFiles: ["<rootDir>/../config/jest.setup.ts"],
  moduleNameMapper: {
    "^api/(.*)$": "<rootDir>/api/$1",
  },
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};

export default config;
