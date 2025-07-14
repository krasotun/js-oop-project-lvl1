import { Validator } from "./src/validator.js";

const v = new Validator();

const schema = v.string();

// console.log(schema.isValid("")); // true
// console.log(schema.isValid(null)); // true
// console.log(schema.isValid(undefined)); // true

// schema.required();

// console.log(schema.isValid("what does the fox say")); // true
// console.log(schema.isValid("hexlet")); // true
// console.log(schema.isValid(null)); // false
// console.log(schema.isValid(undefined)); // false
// console.log(schema.isValid("")); // false

// console.log(schema.minLength(10).minLength(4).isValid("Hexlet")); // true
// console.log(schema.minLength(10).isValid("Hexlet")); // true
