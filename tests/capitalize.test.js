import capitalize from '../scripts/capitalize.js';

// Capitalize Tests

test('Capitalize first letter', () => {
  expect(capitalize('string')).toBe('String');
});

test('Capitalize first letter multiple words', () => {
  expect(capitalize('string one')).toBe('String one');
});