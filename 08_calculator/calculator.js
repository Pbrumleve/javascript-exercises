const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
  let result = 0;
  for (const num of numArray) {
    result += num;
  };
  return result;
};

const multiply = function(numArray) {
  let result = 1;
  for (const num of numArray) {
    result *= num;
  };
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(x) {
	let result = 1;
  if (x === 0) {
    return result;
  } else {
    for (let i = 0; i < x; i++) {
      result *= (x-i);
    };
  }
return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
