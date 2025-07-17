import { beforeEach, describe, expect, it } from "@jest/globals";
import { stringMinLengthValidator } from "./string-min-length ";

describe("#stringMinlength", () => {
  let str;

  beforeEach(() => {
    str = "str-with-sub";
  });

  it("should return true if string longer than minLength", () => {
    expect(stringMinLengthValidator(str, 5)).toBe(true);
  });

  it("should return true if string equals minLength", () => {
    expect(stringMinLengthValidator(str, 11)).toBe(true);
  });

  it("should return false if string shorter than minLength", () => {
    expect(stringMinLengthValidator(str, 100)).toBe(false);
  });
});
