import { hasBike, isEmptyObject, isPrivilegedAccount } from './helpers';

describe('has bike', () => {
  it('should return true if user has a bike', () => {
    const fakeSession = { "firstName": "Andres", "bike": { "color": "#4B0082" } };

    expect(hasBike(fakeSession)).toBe(true);
  });

  it('should return false if user has not a bike', () => {
    const fakeSession = { "firstName": "Sergio" };

    expect(hasBike(fakeSession)).toBe(false);
  });
});

describe('empty object', () => {
  it('should return false if is not an empty object', () => {
    const fakeObj = { "firstName": "Andres", "bike": { "color": "#4B0082" } };
    expect(isEmptyObject(fakeObj)).toBe(false);
  });

  it('should return true if is not an empty object', () => {
    const fakeObj = {};
    expect(isEmptyObject(fakeObj)).toBe(true);
  });
});

describe('privilege account', () => {
  it('should return true if user has a privilege account', () => {
    expect(isPrivilegedAccount('sysadmin@sb.co')).toBe(true);
  });

  it('should return false if user has not a privilege account', () => {
    expect(isPrivilegedAccount('andresbedoya@citizen.co')).toBe(false);
  });
});
