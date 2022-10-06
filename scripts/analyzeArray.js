//Capitalize Function
const analyzeArray = (arr) => {
  return {
    average: getAverage(arr),
    min: getMinimum(arr),
    max: getMaximum(arr),
    length: arr.length
  };
};

function getAverage(arr) {
  return arr.reduce((previous, current) => (current += previous)) / arr.length;
};

function getMinimum(arr) {
  return Math.min(...arr);
};

function getMaximum(arr) {
  return Math.max(...arr);
};

export default analyzeArray;