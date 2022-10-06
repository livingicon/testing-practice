// Calculator Object Methods
const caesarCipher = (str, shiftNum) => {
  if (shiftNum > 25) {
    // alert("ShiftNum must be less than 26");
    return null;
  }
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabet.split("");
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" "0-9]/g;
  const upperCaseArr = str.split("");
  const capitalized = [];
  const strArr = str.toLowerCase().split("");
  
  upperCaseArr.map(x => {
    if (x == x.toUpperCase() && x.search(regex)) {
      capitalized.push(upperCaseArr.indexOf(x));
    }
  });

  const result = strArr.map(x => {
    if (x.search(regex)!== -1) {
      return x;
    } else if (alphabetArr.indexOf(x) + shiftNum <= 25) {
      return alphabetArr[alphabetArr.indexOf(x) + shiftNum];
    } else {
      return alphabetArr[alphabetArr.indexOf(x) + shiftNum - 26];
    } 
  });

  capitalized.forEach(x => result[x] = result[x].toUpperCase());

  return result.join("");
};

export default caesarCipher;