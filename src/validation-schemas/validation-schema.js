export class ValidationSchema {
  schema = {};
  constraints = {};

  addToSchema(name, cb, value) {
    this.schema[name] = cb;

    this.constraints[name] = value;
  }

  isValid(value) {
    const validators = Object.entries(this.schema);

    for (const [name, cb] of validators) {
      const constraint = this.constraints[name];
      if (!cb(value, constraint)) {
        return false;
      }
    }

    return true;
  }
}
