import { beforeEach, describe, expect, it } from "@jest/globals";
import { numberPositiveValidator } from "../validators/number-positive";
import { numberRangeValidator } from "../validators/number-range";
import { numberRequiredValidator } from "../validators/number-required";
import { NumberValidationSchema } from "./number-validation-schema";

describe("#NumberValidationSchema", () => {
  let numberValidationSchema;

  beforeEach(() => {
    numberValidationSchema = new NumberValidationSchema();
  });

  it("should create", () => {
    expect(numberValidationSchema).toBeTruthy();
  });

  describe("#required", () => {
    it("should add required scheme with numberRequiredValidator", () => {
      expect(numberValidationSchema.schema).toEqual({});

      numberValidationSchema.required();

      expect(numberValidationSchema.schema).toEqual({
        required: numberRequiredValidator,
      });
    });
    it("should return schema", () => {
      const schema = numberValidationSchema.required();
      expect(schema).toBeInstanceOf(NumberValidationSchema);
    });
  });

  describe("#positive", () => {
    it("should add positive scheme with numberPositiveValidator", () => {
      expect(numberValidationSchema.schema).toEqual({});

      numberValidationSchema.positive();

      expect(numberValidationSchema.schema).toEqual({
        positive: numberPositiveValidator,
      });
    });

    it("should return schema", () => {
      const schema = numberValidationSchema.positive();
      expect(schema).toBeInstanceOf(NumberValidationSchema);
    });
  });
  describe("#range", () => {
    it("should add range scheme with numberRangeValidator ", () => {
      expect(numberValidationSchema.schema).toEqual({});

      numberValidationSchema.range(5, 15);

      expect(numberValidationSchema.schema).toEqual({
        range: numberRangeValidator,
      });
    });
    it("should save constraints", () => {
      expect(numberValidationSchema.schema).toEqual({});

      numberValidationSchema.range(10, 25);

      expect(numberValidationSchema.constraints).toEqual({
        range: {
          min: 10,
          max: 25,
        },
      });
    });

    it("should return schema", () => {
      const schema = numberValidationSchema.range({ min: 19, max: 25 });
      expect(schema).toBeInstanceOf(NumberValidationSchema);
    });
  });
});
