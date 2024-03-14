const ftoc = function(temp) {
  let absNum = (temp - 32) * 5 / 9;
  return round(absNum);
};

const ctof = function(temp) {
  let absNum = temp * 9 / 5 + 32
  return round(absNum);
};

function round(num) {
  let stepOne = 10 * num;
  return Math.round(stepOne) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
