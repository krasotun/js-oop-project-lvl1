const objectShapeValidator = (value, validators) => {
  return Object.keys(value).every((key) => {
    const validator = validators[key];
    return validator ? validator.isValid(value[key]) : true;
  });
};

export default objectShapeValidator;
