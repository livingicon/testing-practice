import caesarCipher from '../scripts/caesarCipher.js';

// CaesarCipher Test
test('Each string character shifted', () => {
  expect(caesarCipher("abc", 1)).toBe;("bcd");
});

test('Spaces maintained', () => {
  expect(caesarCipher("abc d", 1)).toBe;("bcd e");
});

test('Punctuation maintained', () => {
  expect(caesarCipher("abcd.", 1)).toBe;("bcde.");
});

test('Numbers maintained', () => {
  expect(caesarCipher("1abcd", 1)).toBe;("1bcde");
});

test('Capitalization maintained', () => {
  expect(caesarCipher("Abcd", 1)).toBe;("Bcde");
});

test('Wrapping from z to a', () => {
  expect(caesarCipher("xyz", 1)).toBe;("yza");
});

test('Shifting more than 25 null', () => {
  expect(caesarCipher("xyz", 26)).toBe;("null");
});