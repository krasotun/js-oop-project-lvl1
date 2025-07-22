import { SchemaFactory } from "./validation-schemas/schema-factory.js";

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
}
