import { describe, expect, test } from "@jest/globals";
import { deleteCommand } from "../deleteCommand";
import { RegisterRepository } from "../../repositories/regiterRepository";

describe("delete command tests", () => {
  test("should delete all", async () => {
    const argument = "all";

    const notification = await deleteCommand(argument);

    expect(RegisterRepository.DeleteAll).toHaveBeenCalled();
    expect(notification.Error).toBe(false);
    expect(notification.Message).toBe("all removed!");
  });

  test("should delete by id", async () => {
    const argument = "1";

    const notification = await deleteCommand(argument);

    expect(RegisterRepository.DeleteById).toHaveBeenCalled();
    expect(notification.Error).toBe(false);
    expect(notification.Message).toBe("1 removed!");
  });

  test("should delete by name", async () => {
    const argument = "cup of coffee";

    const notification = await deleteCommand(argument);

    expect(RegisterRepository.DeleteByName).toHaveBeenCalled();
    expect(notification.Error).toBe(false);
    expect(notification.Message).toBe("cup of coffee removed!");
  });
});
