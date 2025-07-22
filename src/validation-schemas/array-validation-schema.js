import { arrayRequiredValidator } from "../validators/array-required.js";
import { arraySizeofValidator } from "../validators/array-sizeof.js";
import { ValidationSchema } from "./validation-schema.js";

export class ArrayValidationSchema extends ValidationSchema {
  required() {
    this.addToSchema("required", arrayRequiredValidator);

    return this;
  }

  sizeof(length) {
    this.addToSchema("contains", arraySizeofValidator, length);

    return this;
  }
}
