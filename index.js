
let sum = function(fromN, toN) {
  // Sum all the values from fromN up to toN
  let result = fromN;
  if (fromN !== toN) {
    return result += sum(fromN + 1, toN);
  }
  return result;
};

console.log(sum(3, 7));

module.exports = sum;
