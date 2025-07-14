import { StringValidationSchema } from "./string-validation-schema.js";

const mapping = {
  string: StringValidationSchema,
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
