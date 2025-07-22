export const objectShapeValidator = (value) => {
  for (const key of Object.keys(value)) {
    const validator = value[key];
    if (!validator.isValid(key)) {
      return false;
    }
  }

  return true;
};
