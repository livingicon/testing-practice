//Capitalize Function
const capitalize = (str) => {
  const cap = str.split("");
  cap[0] = cap[0].toUpperCase();
  return cap.join("");
};

export default capitalize;