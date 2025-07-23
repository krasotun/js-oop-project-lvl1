// import StringValidationSchema from './string-validation-schema';
// import { stringRequiredValidator } from '../validators/string-required';
// import { stringContainsValidator } from '../validators/string-contains';
// import { stringMinLengthValidator } from '../validators/string-min-length ';
// import { beforeEach, describe, expect, it } from 'vitest';

// describe('#StringValidationSchema', () => {
//   let stringValidationSchema;

//   beforeEach(() => {
//     stringValidationSchema = new StringValidationSchema();
//   });

//   it('should create', () => {
//     expect(stringValidationSchema).toBeTruthy();
//   });

//   describe('#required', () => {
//     it('should add required schema with stringRequiredValidator', () => {
//       expect(stringValidationSchema.schema).toEqual({});

//       stringValidationSchema.required();

//       expect(stringValidationSchema.schema).toEqual({
//         required: stringRequiredValidator,
//       });
//     });
//     it('should return schema', () => {
//       const schema = stringValidationSchema.required();
//       expect(schema).toBeInstanceOf(StringValidationSchema);
//     });
//   });

//   describe('#contains', () => {
//     it('should add required schema with stringContainsValidator', () => {
//       expect(stringValidationSchema.schema).toEqual({});

//       stringValidationSchema.contains('sub');

//       expect(stringValidationSchema.schema).toEqual({
//         contains: stringContainsValidator,
//       });
//     });
//     it('should save constraints', () => {
//       expect(stringValidationSchema.schema).toEqual({});

//       stringValidationSchema.contains('sub');

//       expect(stringValidationSchema.constraints).toEqual({
//         contains: 'sub',
//       });
//     });

//     it('should return schema', () => {
//       const schema = stringValidationSchema.contains('sub');
//       expect(schema).toBeInstanceOf(StringValidationSchema);
//     });
//   });
//   describe('#minLength', () => {
//     it('should add required schema with minLengthValidator', () => {
//       expect(stringValidationSchema.schema).toEqual({});

//       stringValidationSchema.minLength(25);

//       expect(stringValidationSchema.schema).toEqual({
//         minLength: stringMinLengthValidator,
//       });
//     });
//     it('should save constraints', () => {
//       expect(stringValidationSchema.schema).toEqual({});

//       stringValidationSchema.minLength(25);

//       expect(stringValidationSchema.constraints).toEqual({
//         minLength: 25,
//       });
//     });

//     it('should return schema', () => {
//       const schema = stringValidationSchema.minLength(25);
//       expect(schema).toBeInstanceOf(StringValidationSchema);
//     });
//   });
// });
