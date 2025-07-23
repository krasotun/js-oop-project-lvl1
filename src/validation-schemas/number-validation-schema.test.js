import { beforeEach, describe, expect, it } from 'vitest';
import { numberPositiveValidator } from '../validators/number-positive';
import { numberRangeValidator } from '../validators/number-range';
import { numberRequiredValidator } from '../validators/number-required';
import { NumberValidationSchema } from './number-validation-schema';

describe('#NumberValidationSchema', () => {
  let numberValidationSchema;

  beforeEach(() => {
    numberValidationSchema = new NumberValidationSchema();
  });

  it('should create', () => {
    expect(numberValidationSchema).toBeTruthy();
  });

  describe('#required', () => {
    it('should add required schema with numberRequiredValidator', () => {
      expect(numberValidationSchema.schema).toEqual({});

      numberValidationSchema.required();

      expect(numberValidationSchema.schema).toEqual({
        required: numberRequiredValidator,
      });
    });
    it('should return schema', () => {
      const schema = numberValidationSchema.required();
      expect(schema).toBeInstanceOf(NumberValidationSchema);
    });
  });

  describe('#positive', () => {
    it('should add required scheme with numberPositiveValidator', () => {
      expect(numberValidationSchema.schema).toEqual({});

      numberValidationSchema.positive();

      expect(numberValidationSchema.schema).toEqual({
        positive: numberPositiveValidator,
      });
    });

    it('should return schema', () => {
      const schema = numberValidationSchema.required();
      expect(schema).toBeInstanceOf(NumberValidationSchema);
    });
  });
  describe('#range', () => {
    it('should add required schema with numberRangeValidator', () => {
      expect(numberValidationSchema.schema).toEqual({});

      numberValidationSchema.range(1, 25);

      expect(numberValidationSchema.schema).toEqual({
        range: numberRangeValidator,
      });
    });
    it('should save constraints', () => {
      expect(numberValidationSchema.schema).toEqual({});

      numberValidationSchema.range(1, 5);

      expect(numberValidationSchema.constraints).toEqual({
        range: {
          min: 1,
          max: 5,
        },
      });
    });

    it('should return schema', () => {
      const schema = numberValidationSchema.range(1, 5);
      expect(schema).toBeInstanceOf(NumberValidationSchema);
    });
  });
});
