export class ValidationSchema {
  static validators = {};

  isValid(value) {
    const validators = Object.values(this.constructor.validators);

    for (const validator of validators) {
      if (!validator.validator(value, validator.params)) {
        return false;
      }
    }

    return true;
  }

  addValidator(name, validator, params = true) {
    this.constructor.validators[name] = {
      validator,
      params,
    };
  }

  test(name, params) {
    this.constructor.validators[name].params = params;
    return this;
  }
}
