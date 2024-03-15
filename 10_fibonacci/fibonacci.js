const fibonacci = function(x) {
  if (x < 0) {
    return 'OOPS';
  } else {
    let fib = 1;
    let currentFib = 0;
    let lastFib = 0;
    for (let i = 0; i < x; i++) {
      lastFib = currentFib;
      currentFib = fib;
      fib += lastFib;
    };
    return currentFib;
  };
};

// Do not edit below this line
module.exports = fibonacci;
