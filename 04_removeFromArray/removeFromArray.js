const removeFromArray = function fun(array, ...theArgs) {
  let newArray
  for (let i = 0; i < theArgs.length; i++) {
    let index = array.indexOf(theArgs[i]);
    if (index > -1) {
      array.splice(index, 1);
      newArray = array;
    };
  };
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
