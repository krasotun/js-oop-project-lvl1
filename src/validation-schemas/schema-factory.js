import { NumberValidationSchema } from "./number-validation-schema.js";
import { StringValidationSchema } from "./string-validation-schema.js";
import { ArrayValidationSchema } from "./array-validation-schema.js";
import { ObjectValidationSchema } from "./object-validation-schema.js";

const mapping = {
  string: StringValidationSchema,
  number: NumberValidationSchema,
  array: ArrayValidationSchema,
  object: ObjectValidationSchema,
};

export class SchemaFactory {
  static factory(schema) {
    const schemaToCreate = mapping[schema];

    if (!schemaToCreate) {
      throw new Error("Schema not implemented");
    }

    return new schemaToCreate();
  }
}
