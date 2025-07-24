const numberPositiveValidator = value => typeof value === 'number' ? value > 0 : true;

export default numberPositiveValidator;
