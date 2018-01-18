import { isBanned } from './helpers';

describe('banned users', () => {
  const fakeusers = [
    {mail: "test1@sb.co", banned: true},
    {mail: "test2@sb.co", banned: false},
    {mail: "test3@sb.co", banned: true}
  ];

  it('should return true if user is banned', () => {
    expect(isBanned('test1@sb.co', fakeusers)).toBe(true);
  });

  it('should return false if user is not banned', () => {
    expect(isBanned('test2@sb.co', fakeusers)).toBe(false);
  });
});
