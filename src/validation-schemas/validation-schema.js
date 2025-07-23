export class ValidationSchema {
  static validators = {};

  isValid(value) {
    const validators = Object.values(this.constructor.validators);

    for (const validator of validators) {
      if (!validator.validator(value, validator.params)) {
        return false;
      }
    }

    console.log(this.constructor.validators);
    return true;
  }

  addValidator(name, validator, params = true) {
    this.constructor.validators[name] = {
      validator,
      params,
    };
  }
}
