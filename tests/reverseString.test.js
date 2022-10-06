import reverseString from '../scripts/reverseString.js';

// Reverse String Test
test('Reverse string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('Reverse string multiple words', () => {
  expect(reverseString('string one')).toBe('eno gnirts');
});