import { Validator } from './src/validator.js';

export default Validator;

// const v = new Validator();

// const fn = (value, start) => value.startsWith(start);

// v.addValidator("string", "startWith", fn);

// const schema = v.string().test("startWith", "H");

// console.log(schema.isValid("exlet")); // false
// console.log(schema.isValid("Hexlet")); // true

// // const schema = v.string().test("startWith", "H");
// // console.log(schema.isValid("exlet")); // false
// // console.log(schema.isValid("Hexlet"));

// // const v = new Validator();

// const schema = v.string();

// const schema1 = v.number();
// const schema2 = v.number();

// console.log(schema.isValid(null)); // true

// schema.required();

// console.log(schema.isValid(null)); // false
// console.log(schema1.isValid(7)); // true
// console.log(schema2.isValid(7)); // true

// console.log(schema.positive().isValid(10)); // true

// schema.range(-5, 5);

// console.log(schema.isValid(-3)); // false
// console.log(schema.isValid(5)); // true

// console.log(schema.isValid("")); // true
// console.log(schema.isValid(null)); // true
// console.log(schema.isValid(undefined)); // true

// schema.required();

// console.log("req added");

// console.log(schema.isValid("what does the fox say")); // true
// console.log(schema.isValid("hexlet")); // true
// console.log(schema.isValid(null)); // false
// console.log(schema.isValid("")); // false

// console.log(" ");

// console.log(schema.contains("what").isValid("what does the fox say")); // true
// console.log(schema.contains("whatthe").isValid("what does the fox say")); // false

// Если один валидатор вызывался несколько раз
// то последний имеет приоритет (перетирает предыдущий)
// console.log(schema.minLength(10).minLength(4).isValid("Hexlet")); // true
