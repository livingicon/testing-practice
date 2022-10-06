import analyzeArray from '../scripts/analyzeArray.js';

// Reverse String Test
test('Analyze array object', () => {
  expect(analyzeArray([3,6,10,1])).toMatchObject({
    average: 5,
    min: 1,
    max: 10,
    length: 4
  });
});