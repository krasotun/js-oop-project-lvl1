import { beforeEach, describe, expect, it } from "@jest/globals";
import { ValidationSchema } from "./validation-schema";

describe("#ValidationSchema", () => {
  let validationSchema;

  beforeEach(() => {
    validationSchema = new ValidationSchema();
  });

  it("should create", () => {
    expect(validationSchema).toBeTruthy();
  });

  describe("initial config", () => {
    it("schema should be empty", () => {
      expect(validationSchema.schema).toEqual({});
    });

    it("constraints should be empty", () => {
      expect(validationSchema.constraints).toEqual({});
    });
  });

  describe("#addToSchema", () => {
    it("should add new schema", () => {
      const mockName = "mockName";
      const mockCb = () => {};

      validationSchema.addToSchema(mockName, mockCb);

      expect(validationSchema.schema).toEqual({ mockName: mockCb });
    });

    it("should update existing schema", () => {
      const mockName = "mockName";
      const mockCb = () => {};

      validationSchema.schema = {
        mockName: mockCb,
      };
      const anotherMockCb = () => {};
      validationSchema.addToSchema(mockName, anotherMockCb);

      expect(validationSchema.schema).toEqual({ mockName: anotherMockCb });
    });

    it("should add new constraints", () => {
      const mockName = "mockName";
      const mockCb = () => {};
      const mockConstraints = 146;

      validationSchema.addToSchema(mockName, mockCb, mockConstraints);

      expect(validationSchema.constraints).toEqual({
        mockName: mockConstraints,
      });
    });
    it("should update existing constraints", () => {
      const mockName = "mockName";
      const mockCb = () => {};
      const mockConstraints = 146;

      validationSchema.constraints = {
        mockName: mockConstraints,
      };

      validationSchema.addToSchema(mockName, mockCb, 147);

      expect(validationSchema.constraints).toEqual({
        mockName: 147,
      });
    });
  });

  describe("#isValid", () => {
    it("should return true if no validators provided", () => {
      expect(validationSchema.isValid()).toBe(true);
    });

    it("should return true if all validators passed", () => {
      const mockSchema = {
        firstValidator: () => true,
        secondValidator: () => true,
      };

      validationSchema.schema = mockSchema;
      expect(validationSchema.isValid()).toBe(true);
    });
    it("should return false if at least one of validators failed", () => {
      const mockSchema = {
        firstValidator: () => true,
        secondValidator: () => false,
        thirdValidator: () => false,
      };

      validationSchema.schema = mockSchema;
      expect(validationSchema.isValid()).toBe(false);
    });
  });
});
