import {
  createBtn,
  isUser,
  isValidEmail,
  sanitizeField
} from './helpers';

describe('sanitize fields', () => {
  it('should sanitize fields if contains special chars', () => {
    expect(sanitizeField("<script>")).toBe("&lt;script&&gt;");
    expect(sanitizeField("<script>alert('XSS alert dudes')</script>")).toBe("&lt;script&&gt;alert(&#39;XSS alert dudes&#39;)&lt;/script&&gt;");
  });

  it('should return the same string if does not contains special chars', () => {
    expect(sanitizeField("Andres")).toEqual("Andres");
  });
});

describe('validate emails', () => {
  it('should return true if it is a valid email', () => {
    expect(isValidEmail("prettyandsimple@example.com")).toBe(true);
    expect(isValidEmail("very.common@example.com")).toBe(true);
    expect(isValidEmail("example-indeed@strange-example.com")).toBe(true);
  });

  it('should return false if it is an invalid email', () => {
    expect(isValidEmail("#!$%&'*+-/=?^_`{}|~@example.org")).toBe(false);
    expect(isValidEmail("example@localhost")).toBe(false);
    expect(isValidEmail('"very.unusual.@.unusual.com"@example.com')).toBe(false);
  });
});

describe('validate users', () => {
  const fakeusers = [{mail: "test1@sb.co"}, {mail: "test2@sb.co"}, {mail: "test3@sb.co"}];

  it('should return email if user exist', () =>{
    expect(isUser("test1@sb.co", fakeusers)).toEqual({mail: "test1@sb.co"});
  });

  it('should return undefined if user does not exist', () => {
    expect(isUser("test9@sb.co", fakeusers)).toEqual(undefined);
    expect(isUser("123456789", fakeusers)).toEqual(undefined);
  });
});

describe('create button', () => {
  const fakeBtn = '<input type="submit" name="login" value="Login">';

  it('should return the HTML with the button', () => {
    expect(createBtn('submit', 'login', 'Login').outerHTML).toEqual(fakeBtn);
  })
});
