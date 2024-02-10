import { describe, expect, test } from "@jest/globals";
import { PATTERN, splitValues } from "../regex.utils";

describe("Regex pattern tests", () => {
  test.each([
    "cup of coffee 32",
    "steam 43",
    "hbo 24,9",
    "cat food  54,99",
    "Ávatar 12",
    "mcDonalds 1.000,24",
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

describe("Regex take value tests", () => {
  test.each([
    {
      content: "cup of coffee 32",
      expectedName: "cup of coffee",
      expectedValue: "32",
    },
    { content: "steam 43", expectedName: "steam", expectedValue: "43" },
    { content: "hbo 24,9", expectedName: "hbo", expectedValue: "24,9" },
    {
      content: "cat food 54,99",
      expectedName: "cat food",
      expectedValue: "54,99",
    },
    { content: "Ávatar 12", expectedName: "Ávatar", expectedValue: "12" },
    {
      content: "McDonalds 1.000,24",
      expectedName: "McDonalds",
      expectedValue: "1.000,24",
    },
  ])(
    "should split '$content' between name and value",
    ({ content, expectedName, expectedValue }) => {
      const [name, value] = splitValues(content);
      expect(name).toEqual(expectedName);
      expect(value).toEqual(expectedValue);
    }
  );
});
