import { beforeEach, describe, expect, it } from "@jest/globals";
import { numberPositiveValidator } from "./number-positive";

describe("#numberPositive", () => {
  let num;

  beforeEach(() => {
    num = 10;
  });

  it("should return false if value not positive", () => {
    num = -5;
    expect(numberPositiveValidator(num)).toBe(false);
  });

  it("should return true if value positive", () => {
    expect(numberPositiveValidator(num)).toBe(true);
  });
});
