const numberPositiveValidator = (value) => {
  return typeof value === 'number' ? value > 0 : true;
};

export default numberPositiveValidator;
