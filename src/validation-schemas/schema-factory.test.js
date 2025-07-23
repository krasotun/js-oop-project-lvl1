// import { describe, expect, it } from 'vitest';
// import { SchemaFactory } from './schema-factory';
// import StringValidationSchema from './string-validation-schema';

// describe('#SchemaFactory', () => {
//   it('should create', () => {
//     expect(new SchemaFactory()).toBeTruthy();
//   });

//   it('factory should return new schema if name presents in configuration', () => {
//     const newSchema = SchemaFactory.factory('string');
//     expect(newSchema).toBeInstanceOf(StringValidationSchema);
//   });

//   it('factory should throw if name not in configuration', () => {
//     expect(() => SchemaFactory.factory('unknown')).toThrow(
//       'Schema not implemented'
//     );
//   });
// });
