const objectShapeValidator = (value, validators) => Object.keys(value).every(
  (key) => (validators[key] ? validators[key].isValid(value[key]) : true),
);

export default objectShapeValidator;
