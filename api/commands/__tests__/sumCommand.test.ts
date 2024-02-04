import { describe, expect, test, jest } from "@jest/globals";
import { sumCommand } from "../sumCommand";
import { RegisterRepository } from "../../repositories/regiterRepository";

/**
 * see: https://stackoverflow.com/questions/61435553/is-there-a-way-to-compare-formatted-value-by-numberformat
 */
const format = (str: string | undefined) => str!.replace("\u{00A0}", " ");

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
