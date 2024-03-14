const sumAll = function(a, b) {
  let sum = 0;
  if (a >= 0 && b >= 0 && typeof a === 'number' && typeof b === 'number') {
    if (0 <= a < b) {
      for (let i = a; i <= b; i++) {
        sum += i;
      };
    } else if (0 <= b < a) {
      for (let i = b; i <= a; i++) {
        sum += i;
      } 
    } else {
        sum = 'ERROR';
      };
      return sum;
  } else {return sum = 'ERROR'};
};

// Do not edit below this line
module.exports = sumAll;
