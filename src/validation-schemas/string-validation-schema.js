import { stringContainsValidator } from "../validators/string-contains.js";
import { stringMinLengthValidator } from "../validators/string-min-length .js";
import { stringRequiredValidator } from "../validators/string-required.js";
import { ValidationSchema } from "./validation-schema.js";

export class StringValidationSchema extends ValidationSchema {
  required() {
    this.addToSchema("required", stringRequiredValidator);

    return this;
  }

  contains(subString) {
    this.addToSchema("contains", stringContainsValidator, subString);

    return this;
  }

  minLength(minLength) {
    this.addToSchema("minLength", stringMinLengthValidator, minLength);

    return this;
  }
}
