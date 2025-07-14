export const stringRequiredValidator = (value) =>
  typeof value === "string" && value.length > 0;
