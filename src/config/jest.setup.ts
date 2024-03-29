import { jest } from "@jest/globals";
jest.mock("../repositories/regiterRepository", () => ({
  RegisterRepository: {
    List: jest.fn(),
    Save: jest.fn(),
    DeleteAll: jest.fn(),
    DeleteById: jest.fn(),
    DeleteByName: jest.fn(),
  },
}));

jest.mock("../repositories/limitRepository", () => ({
  LimitRepository: {
    Get: jest.fn(),
    Save: jest.fn(),
  },
}));
