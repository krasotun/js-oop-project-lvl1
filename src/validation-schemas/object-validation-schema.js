import { objectShapeValidator } from "../validators/object-shape.js";
import { ValidationSchema } from "./validation-schema.js";

export class ObjectValidationSchema extends ValidationSchema {
  shape(validators) {
    this.addToSchema("shape", objectShapeValidator, validators);

    return this;
  }
}
