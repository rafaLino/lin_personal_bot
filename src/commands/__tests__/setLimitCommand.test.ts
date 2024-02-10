import { describe, expect, test, jest } from "@jest/globals";
import { setLimitCommand } from "../setLimitCommand";
import { LimitRepository } from "../../repositories/limitRepository";

describe("set limit Command tests", () => {
  test("should set a limit given an float number", async () => {
    const argument = "100";

    const notification = await setLimitCommand(argument);

    expect(LimitRepository.Save).toHaveBeenCalled();
    expect(notification.Error).toBe(false);
  });
});
