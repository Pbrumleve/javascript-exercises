const palindromes = function (str) {
  let result;
  let array = Array.from(str);
  let onlyLetters = [];
  for (const letter of array) {
    if (isLetter(letter) === null) {
    } else {
      onlyLetters += letter;
    };
  }
  let reverseArray = Array.from(onlyLetters).reverse().join('');
  if (onlyLetters.toLowerCase() === reverseArray.toLowerCase()) {
    result = true;
  } else {result = false};
  return result
};

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

// Do not edit below this line
module.exports = palindromes;
