import { numberPositiveValidator } from '../validators/number-positive.js';
import { numberRangeValidator } from '../validators/number-range.js';
import { numberRequiredValidator } from '../validators/number-required.js';
import { ValidationSchema } from './validation-schema.js';

export class NumberValidationSchema extends ValidationSchema {
  required() {
    this.addValidator('required', numberRequiredValidator);

    return this;
  }

  positive() {
    this.addValidator('positive', numberPositiveValidator);

    return this;
  }

  range(min, max) {
    this.addValidator('range', numberRangeValidator, { min, max });

    return this;
  }
}
