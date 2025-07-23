import { objectShapeValidator } from '../validators/object-shape.js';
import { ValidationSchema } from './validation-schema.js';

class ObjectValidationSchema extends ValidationSchema {
  shape(validators) {
    this.addValidator('shape', objectShapeValidator, validators);

    return this;
  }
}

export default ObjectValidationSchema;
