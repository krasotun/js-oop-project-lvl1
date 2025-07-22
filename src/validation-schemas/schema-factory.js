import { NumberValidationSchema } from "./number-validation-schema.js";
import { StringValidationSchema } from "./string-validation-schema.js";
import { ArrayValidationSchema } from "./array-validation-schema.js";

const mapping = {
  string: StringValidationSchema,
  number: NumberValidationSchema,
  array: ArrayValidationSchema,
};

export class SchemaFactory {
  static factory(schema) {
    const schemaToCreate = mapping[schema];

    if (!schemaToCreate) {
      throw new Error("Schema not implemented");
    }

    return new mapping[schema]();
  }
}
