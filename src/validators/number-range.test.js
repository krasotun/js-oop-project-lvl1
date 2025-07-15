import { beforeEach, describe, expect, it } from "@jest/globals";
import { numberRangeValidator } from "./number-range";

describe("#numberRange", () => {
  let num;
  let range;

  beforeEach(() => {
    range = { min: 5, max: 10 };
  });

  it("should return false if value smaller than min", () => {
    num = 2;
    expect(numberRangeValidator(num, range)).toBe(false);
  });

  it("should return false if value bigger than max", () => {
    num = 11;
    expect(numberRangeValidator(num, range)).toBe(false);
  });

  it("should return trur  if value in range", () => {
    num = 6;
    expect(numberRangeValidator(num, range)).toBe(true);
  });
});
