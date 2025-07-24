const objectShapeValidator = (value, validators) => {
  for (const key of Object.keys(value)) {
    const validator = validators[key];
    if (!validator.isValid(value[key])) {
      return false;
    }
  }
  return true;
};

export default objectShapeValidator;
