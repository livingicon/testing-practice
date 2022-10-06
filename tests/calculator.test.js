import calculator from '../scripts/calculator.js';

// Calculator Test
test('Add', () => {
  expect(calculator.add(1, 2)).toEqual;(3);
});

test('Subtract', () => {
  expect(calculator.subtract(1, 2)).toEqual(-1);
});

test('Divide', () => {
  expect(calculator.divide(6, 2)).toBeCloseTo(3);
});

test('Multiply', () => {
  expect(calculator.multiply(6, 2)).toEqual(12);
});