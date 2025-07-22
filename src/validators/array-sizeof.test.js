import { beforeEach, describe, expect, it } from "@jest/globals";
import { arraySizeofValidator } from "./array-sizeof";

describe("#arraySizeof", () => {
  let arr;

  beforeEach(() => {
    arr = [1, 2, 3];
  });

  it("should return true if array length equals length", () => {
    expect(arraySizeofValidator(arr, 3)).toBe(true);
  });
  it("should return false if array length not equals length", () => {
    expect(arraySizeofValidator(arr, 5)).toBe(false);
  });
});
