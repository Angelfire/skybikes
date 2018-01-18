import { isBanned } from './helpers';

test('banned user', () => {
  const fakeusers = [
    {mail: "test1@sb.co", banned: true},
    {mail: "test2@sb.co", banned: false},
    {mail: "test3@sb.co", banned: true}
  ];

  expect(isBanned('test1@sb.co', fakeusers)).toBe(true);
  expect(isBanned('test2@sb.co', fakeusers)).toBe(false);
})
