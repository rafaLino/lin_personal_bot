import { describe, expect, test } from "@jest/globals";
import { PATTERN } from "../regex.utils";

describe("Regex pattern tests", () => {
  test.each([
    "cup of coffee 32",
    "steam 43",
    "hbo 24,9",
    "cat food  54,99",
    "Ávatar 12",
  ])("should value '%s' match pattern", (value) => {
    const regex = new RegExp(PATTERN);
    expect(regex.test(value)).toBe(true);
  });

  test('should not match text beginning with "/"', () => {
    const value = "/limit 100";
    const regex = new RegExp(PATTERN);
    expect(regex.test(value)).toBe(false);
  });
});
