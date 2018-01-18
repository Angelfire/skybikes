import {
  createBtn,
  isUser,
  isValidEmail,
  sanitizeField
} from './helpers';

test('sanitize fields', () => {
  expect(sanitizeField("<script>")).toBe("&lt;script&&gt;");
  expect(sanitizeField("<script>alert('hacking')</script>")).toBe("&lt;script&&gt;alert(&#39;hacking&#39;)&lt;/script&&gt;");
});

test('valid emails', () => {
  expect(isValidEmail("prettyandsimple@example.com")).toBe(true);
  expect(isValidEmail("very.common@example.com")).toBe(true);
  expect(isValidEmail("example-indeed@strange-example.com")).toBe(true);
  expect(isValidEmail("#!$%&'*+-/=?^_`{}|~@example.org")).toBe(false);
  expect(isValidEmail("example@localhost")).toBe(false);
  expect(isValidEmail('"very.unusual.@.unusual.com"@example.com')).toBe(false);
});

test('valid user', () => {
  const fakeusers = [{mail: "test1@sb.co"}, {mail: "test2@sb.co"}, {mail: "test3@sb.co"}];

  expect(isUser("test1@sb.co", fakeusers)).toEqual({mail: "test1@sb.co"});
  expect(isUser("test9@sb.co", fakeusers)).toEqual(undefined);
  expect(isUser("123456789", fakeusers)).toEqual(undefined);
});

test('create button', () => {
  const fakeBtn = '<input type="submit" name="login" value="Login">';

  expect(createBtn('submit', 'login', 'Login').outerHTML).toEqual(fakeBtn);
});