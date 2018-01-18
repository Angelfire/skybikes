import { isValidName, isValidPhone } from './helpers';

test('validate names', () => {
  expect(isValidName('Do')).toBe(false);
  expect(isValidName('Andres')).toBe(true);
});

test('validate phone numbers', () => {
  expect(isValidPhone('123456')).toBe(false);
  expect(isValidPhone('helloworld')).toBe(false);
  expect(isValidPhone('12345667')).toBe(true);
});