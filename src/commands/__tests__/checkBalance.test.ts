import { describe, expect, test, jest } from "@jest/globals";
import { checkBalanceCommand } from "../checkBalanceCommand";
import { LimitRepository } from "../../repositories/limitRepository";
import { RegisterRepository } from "../../repositories/regiterRepository";
import { format } from "../../utils/test.utils";

describe("check Balance Command tests", () => {
  test("should get a balance without a limit", async () => {
    (LimitRepository.Get as jest.Mock).mockReturnValue(0);
    (RegisterRepository.List as jest.Mock).mockReturnValue([
      {
        id: 1,
        name: "cup of coffee",
        amount: 32,
      },
    ]);

    const notification = await checkBalanceCommand();

    expect(LimitRepository.Get).toHaveBeenCalled();
    expect(RegisterRepository.List).toHaveBeenCalled();

    expect(notification.Error).toBe(false);
  });

  test("should get a balance given a limit", async () => {
    (LimitRepository.Get as jest.Mock).mockReturnValue(100);
    (RegisterRepository.List as jest.Mock).mockReturnValue([
      {
        id: 1,
        name: "cup of coffee",
        amount: 50,
      },
    ]);

    const notification = await checkBalanceCommand();

    expect(LimitRepository.Get).toHaveBeenCalled();
    expect(RegisterRepository.List).toHaveBeenCalled();

    expect(notification.Error).toBe(false);
    expect(format(notification.Message)).toEqual(
      `Limit: R$ 100,00\nBalance: <b>R$ 50,00</b>`
    );
  });
});
