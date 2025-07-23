export class ValidationSchema {
  validators = {};

  isValid(value) {
    const validators = Object.values(this.validators);
    for (const validator of validators) {
      if (!validator.validator(value, validator.params)) {
        return false;
      }
    }

    return true;
  }

  addValidator(name, validator, params = true) {
    this.validators[name] = {
      validator,
      params,
    };
  }

  test(name, params) {
    this.validators[name].params = params;
    return this;
  }
}
