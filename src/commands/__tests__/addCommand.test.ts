import { describe, expect, test, jest } from "@jest/globals";
import { addCommand } from "../addCommand";
import { RegisterRepository } from "../../repositories/regiterRepository";

describe("add Command tests", () => {
  test("should add an register given an float number", async () => {
    const argument = "cup of coffee 32,4";

    const notification = await addCommand(argument);

    expect(RegisterRepository.Save).toHaveBeenCalled();
    expect(notification.Error).toBe(false);
  });

  test("should add an register given an int number ", async () => {
    const argument = "cup of coffee 16";

    const notification = await addCommand(argument);

    expect(RegisterRepository.Save).toHaveBeenCalled();
    expect(notification.Error).toBe(false);
  });

  test("should add an register given an special character description", async () => {
    const argument = "Água 2";

    const notification = await addCommand(argument);

    expect(RegisterRepository.Save).toHaveBeenCalled();
    expect(notification.Error).toBe(false);
  });

  test("should get error given an bad amount", async () => {
    const argument = "cup of coffee free";

    const notification = await addCommand(argument);

    expect(RegisterRepository.Save).not.toHaveBeenCalled();
    expect(notification.Error).toBe(true);
  });

  test("should get error given an zero amount", async () => {
    const argument = "cup of coffee 0";

    const notification = await addCommand(argument);

    expect(RegisterRepository.Save).not.toHaveBeenCalled();
    expect(notification.Error).toBe(true);
  });
});
