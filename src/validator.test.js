import { Validator } from "./validator.js";
import { beforeEach, describe, it, expect } from "@jest/globals";

describe("#Validator", () => {
  let v;

  beforeEach(() => {
    v = new Validator();
  });

  it("should create", () => {
    expect(v).toBeTruthy();
  });
});
