import { sanitizeField } from './helpers';

test('sanitize fields', () => {
  expect(sanitizeField("<script>")).toBe("&lt;script>");
});