const objectShapeValidator = (value, validators) => {
  Object.keys(value).forEach((key) => {
    const validator = validators[key];
    if (!validator.isValid(value[key])) {
      return false;
    }
  });
    
  return true;
};

export default objectShapeValidator;
