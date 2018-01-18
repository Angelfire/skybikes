import { isValidName, isValidPhone } from './helpers';

describe('validate first name and last name', () => {
  it('should return false if name is not valid', () => {
    expect(isValidName('Do')).toBe(false);
  });

  it('should return true if name is valid', () => {
    expect(isValidName('Andres')).toBe(true);
  })
});

describe('validate phone numbers', () => {
  it('should return false if phone number is not valid', () => {
    expect(isValidPhone('123456')).toBe(false);
    expect(isValidPhone('helloworld')).toBe(false);
  });

  it('should return true if phone number is valid', () => {
    expect(isValidPhone('12345667')).toBe(true);
  })
});
 