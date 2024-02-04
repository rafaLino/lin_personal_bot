import { describe, expect, jest, test } from "@jest/globals";
import { listCommand } from "../listCommand";
import { RegisterRepository } from "../../repositories/regiterRepository";

describe("list command tests", () => {
  test("should return list as plain text", async () => {
    const mockedData = [
      {
        id: 1,
        name: "cup of coffee",
        amount: 32,
      },
    ];

    (RegisterRepository.List as jest.Mock).mockReturnValue(mockedData);
    const notification = await listCommand();

    expect(notification.Error).toBe(false);
    expect(notification.Message).toEqual("1 - cup of coffee R$ 32");
  });
});
