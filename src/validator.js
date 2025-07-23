import { SchemaFactory } from "./validation-schemas/schema-factory.js";

export class Validator {
  // Хранит общие валидаторы для каждого типа
  commonValidators = {
    string: {},
    number: {},
    array: {},
    object: {},
  };

  string() {
    const schema = SchemaFactory.factory("string");
    // Применяем все общие валидаторы для строк
    this.applyCommonValidators("string", schema);
    return schema;
  }

  number() {
    const schema = SchemaFactory.factory("number");
    this.applyCommonValidators("number", schema);
    return schema;
  }

  array() {
    const schema = SchemaFactory.factory("array");
    this.applyCommonValidators("array", schema);
    return schema;
  }

  object() {
    const schema = SchemaFactory.factory("object");
    this.applyCommonValidators("object", schema);
    return schema;
  }

  // Добавляет общий валидатор для всех схем определенного типа
  addValidator(type, name, fn) {
    this.commonValidators[type][name] = fn;
  }

  // Применяет общие валидаторы к конкретной схеме
  applyCommonValidators(type, schema) {
    const validators = this.commonValidators[type];
    for (const [name, fn] of Object.entries(validators)) {
      schema.addValidator(name, fn);
    }
  }
}
