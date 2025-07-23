import arrayRequiredValidator from '../validators/array-required.js';
import arraySizeofValidator from '../validators/array-sizeof.js';
import { ValidationSchema } from './validation-schema.js';

class ArrayValidationSchema extends ValidationSchema {
  required() {
    this.addValidator('required', arrayRequiredValidator);

    return this;
  }

  sizeof(length) {
    this.addValidator('contains', arraySizeofValidator, length);

    return this;
  }
}

export default ArrayValidationSchema;
