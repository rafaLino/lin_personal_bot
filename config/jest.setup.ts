import { jest } from "@jest/globals";
jest.mock("../api/repositories/regiterRepository", () => ({
  RegisterRepository: {
    List: jest.fn(),
    Save: jest.fn(),
    DeleteAll: jest.fn(),
    DeleteById: jest.fn(),
    DeleteByName: jest.fn(),
  },
}));
