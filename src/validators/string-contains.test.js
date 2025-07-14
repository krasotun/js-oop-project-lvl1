import { beforeEach, describe, expect, it } from "@jest/globals";
import { stringContainsValidator } from "./string-contains";

describe("#stringContains", () => {
  let str;

  beforeEach(() => {
    str = "str-with-sub";
  });

  it("should return true if string contains substring", () => {
    const sub = "sub";
    expect(stringContainsValidator(str, sub)).toBe(true);
  });
  it("should return false if string not contains substring", () => {
    const sub = "substr";
    expect(stringContainsValidator(str, sub)).toBe(false);
  });
});
