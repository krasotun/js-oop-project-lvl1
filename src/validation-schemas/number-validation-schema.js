import { numberPositiveValidator } from "../validators/number-positive.js";
import { numberRangeValidator } from "../validators/number-range.js";
import { numberRequiredValidator } from "../validators/number-required.js";
import { ValidationSchema } from "./validation-schema.js";

export class NumberValidationSchema extends ValidationSchema {
  required() {
    this.addToSchema("required", numberRequiredValidator);

    return this;
  }

  positive() {
    this.addToSchema("positive", numberPositiveValidator);

    return this;
  }

  range(min, max) {
    this.addToSchema("range", numberRangeValidator, { min, max });

    return this;
  }
}
