class ValidationSchema {
  constructor() {
    this.validators = {};
  }

  isValid(value) {
    return Object.values(this.validators)
      .every(
        ({ validator, params }) => validator(value, params),
      );
  }

  addValidator(name, validator, params = true) {
    this.validators[name] = { validator, params };
  }

  test(name, params) {
    if (!this.validators[name]) {
      throw new Error(`Validator "${name}" not found`);
    }
    this.validators[name].params = params;
    return this;
  }
}

export default ValidationSchema;
