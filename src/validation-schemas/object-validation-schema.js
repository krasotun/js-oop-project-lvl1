import { objectShapeValidator } from '../validators/object-shape.js';
import { ValidationSchema } from './validation-schema.js';

export class ObjectValidationSchema extends ValidationSchema {
  shape(validators) {
    this.addValidator('shape', objectShapeValidator, validators);

    return this;
  }
}
