import { stringContainsValidator } from '../validators/string-contains.js';
import { stringMinLengthValidator } from '../validators/string-min-length .js';
import { stringRequiredValidator } from '../validators/string-required.js';
import { ValidationSchema } from './validation-schema.js';

class StringValidationSchema extends ValidationSchema {
  required() {
    this.addValidator('required', stringRequiredValidator);

    return this;
  }

  contains(subString) {
    this.addValidator('contains', stringContainsValidator, subString);

    return this;
  }

  minLength(minLength) {
    this.addValidator('minLength', stringMinLengthValidator, minLength);
    return this;
  }
}

export default StringValidationSchema;
