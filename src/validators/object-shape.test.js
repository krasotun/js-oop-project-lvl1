import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { objectShapeValidator } from "./object-shape";

describe("#objectShape", () => {
  let validators;

  const validSchemaMock = {
    isValid: () => true,
  };
  const notValidSchemaMock = {
    isValid: () => false,
  };

  beforeEach(() => {
    validators = {};
  });

  it("should return true if all keys are valid", () => {
    validators = {
      one: validSchemaMock,
      two: validSchemaMock,
      three: validSchemaMock,
    };
    expect(objectShapeValidator(validators)).toBe(true);
  });

  it("should return false if some keys are not valid", () => {
    validators = {
      one: validSchemaMock,
      two: notValidSchemaMock,
      three: validSchemaMock,
    };
    expect(objectShapeValidator(validators)).toBe(false);
  });

  it("shouuld call isValid for each key with correct argument", () => {
    const mockValidator = {
      isValid: jest.fn((key) => true),
    };

    validators = {
      one: mockValidator,
      two: mockValidator,
    };

    objectShapeValidator(validators);

    expect(mockValidator.isValid).toHaveBeenCalledWith("one");
    expect(mockValidator.isValid).toHaveBeenCalledWith("two");

    expect(mockValidator.isValid).toHaveBeenCalledTimes(2);
  });
});
