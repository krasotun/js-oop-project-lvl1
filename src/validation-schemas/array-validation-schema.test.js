import { beforeEach, describe, expect, it } from 'vitest';
import ArrayValidationSchema from './array-validation-schema';
import { arrayRequiredValidator } from '../validators/array-required';
import { arraySizeofValidator } from '../validators/array-sizeof';

describe('#ArrayValidationSchema', () => {
  let arrayValidationSchema;

  beforeEach(() => {
    arrayValidationSchema = new ArrayValidationSchema();
  });

  it('should create', () => {
    expect(arrayValidationSchema).toBeTruthy();
  });

  describe('#required', () => {
    it('should add required schema with arrayRequiredValidator', () => {
      expect(arrayValidationSchema.schema).toEqual({});

      arrayValidationSchema.required();

      expect(arrayValidationSchema.schema).toEqual({
        required: arrayRequiredValidator,
      });
    });

    it('should return schema', () => {
      const schema = arrayValidationSchema.required();
      expect(schema).toBeInstanceOf(ArrayValidationSchema);
    });
  });

  describe('#sizeof', () => {
    it('should add sizeof schema with arraySizeofValidator', () => {
      expect(arrayValidationSchema.schema).toEqual({});

      arrayValidationSchema.sizeof(2);

      expect(arrayValidationSchema.schema).toEqual({
        contains: arraySizeofValidator,
      });
    });

    it('should save constraints', () => {
      expect(arrayValidationSchema.schema).toEqual({});

      arrayValidationSchema.sizeof(2);

      expect(arrayValidationSchema.constraints).toEqual({
        contains: 2,
      });
    });

    it('should return schema', () => {
      const schema = arrayValidationSchema.sizeof(2);
      expect(schema).toBeInstanceOf(ArrayValidationSchema);
    });
  });
});
