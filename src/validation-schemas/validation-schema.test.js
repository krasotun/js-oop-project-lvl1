import { beforeEach, describe, expect, it } from 'vitest';
import { ValidationSchema } from './validation-schema';

describe('#ValidationSchema', () => {
  let validationSchema;

  beforeEach(() => {
    validationSchema = new ValidationSchema();
  });

  it('should create', () => {
    expect(validationSchema).toBeTruthy();
  });

  describe('#addValidator', () => {
    it('should add new validator with default params', () => {
      const mockName = 'mockName';
      const mockValidator = () => {};

      validationSchema.addValidator(mockName, mockValidator);

      expect(ValidationSchema.validators).toEqual({
        mockName: { validator: mockValidator, params: true },
      });
    });

    it('should update existing validator', () => {
      const mockName = 'mockName';
      const mockValidator = () => {};

      ValidationSchema.validators = {
        mockName: { validator: mockValidator, params: 123 },
      };
      const anotherMockValidator = () => {};

      validationSchema.addValidator(mockName, anotherMockValidator, 124);

      expect(ValidationSchema.validators).toEqual({
        mockName: { validator: anotherMockValidator, params: 124 },
      });
    });
  });

  // describe("#isValid", () => {
  //   it("should return true if no validators provided", () => {
  //     expect(validationSchema.isValid()).toBe(true);
  //   });

  //   it("should return true if all validators passed", () => {
  //     const mockSchema = {
  //       firstValidator: () => true,
  //       secondValidator: () => true,
  //     };

  //     validationSchema.schema = mockSchema;
  //     expect(validationSchema.isValid()).toBe(true);
  //   });
  //   it("should return false if at least one of validators failed", () => {
  //     const mockSchema = {
  //       firstValidator: () => true,
  //       secondValidator: () => false,
  //       thirdValidator: () => false,
  //     };

  //     validationSchema.schema = mockSchema;
  //     expect(validationSchema.isValid()).toBe(false);
  //   });
  // });
});
