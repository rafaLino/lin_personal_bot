import { describe, expect, test, jest } from "@jest/globals";
import { sumCommand } from "../sumCommand";
import { RegisterRepository } from "../../repositories/regiterRepository";
import { format } from "../../utils/test.utils";
describe("sum command tests", () => {
  test("should sum all amounts", async () => {
    const mockedData = [
      {
        id: 1,
        name: "cup of coffee",
        amount: 32.15,
      },
      {
        id: 1,
        name: "bottle of water",
        amount: 12.75,
      },
    ];

    (RegisterRepository.List as jest.Mock).mockReturnValue(mockedData);
    const notification = await sumCommand();
    expect(format(notification.Message)).toEqual("R$ 44,90");
  });
});
