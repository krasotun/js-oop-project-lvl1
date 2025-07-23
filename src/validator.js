import { mapping, SchemaFactory } from "./validation-schemas/schema-factory.js";

export class Validator {
  string() {
    return SchemaFactory.factory("string");
  }

  number() {
    return SchemaFactory.factory("number");
  }

  array() {
    return SchemaFactory.factory("array");
  }

  object() {
    return SchemaFactory.factory("object");
  }

  addValidator(type, name, fn) {
    const SchemaClass = mapping[type];

    if (!SchemaClass) {
      throw new Error(`Schema type ${type} not found`);
    }

    SchemaClass.validators = {
      ...SchemaClass.validators,
      [name]: {
        validator: fn,
      },
    };
  }
}
