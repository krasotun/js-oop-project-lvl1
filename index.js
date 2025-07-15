import { Validator } from "./src/validator.js";

const v = new Validator();

const schema = v.number();

// console.log(schema.isValid("")); // true
// console.log(schema.isValid(null)); // true
// console.log(schema.isValid(undefined)); // true

// schema.required();

// console.log(schema.isValid(7)); // true
// console.log(schema.isValid(null)); // false
// console.log(schema.isValid(undefined)); // false
// console.log(schema.isValid("")); // false

// schema.positive();

schema.range(-5, 5);

console.log(schema.isValid(4)); // true
console.log(schema.isValid(-7)); // false

// console.log(schema.minLength(10).minLength(4).isValid("Hexlet")); // true
// console.log(schema.minLength(10).isValid("Hexlet")); // true
