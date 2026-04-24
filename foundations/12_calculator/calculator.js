const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let arrayLength = array.length;
  if (arrayLength === 0) {
    return 0;
  } else if (arrayLength === 1) {
    return array[0];
  } else {
    let result = 0;
    for (i = 0; i < arrayLength; i++) {
      result += array[i];
    }
    return result;
  }
};

const multiply = function(array) {
  let arrayLength = array.length;
  if (arrayLength === 0) {
    return 0;
  } else if (arrayLength === 1) {
    return array[0];
  } else {
    let result = array[0];
    for (i = 1; i < arrayLength; i++) {
      result *= array[i];
    }
    return result;
  }
};

const power = function() {
	let exponent = arguments[1];
  if (exponent === 0) {
    return 1;
  } else if (exponent === 1) {
    return arguments[0];
  } else {
    let result = arguments[0];
    for (i = 1; i < exponent; i++) {
      result *= arguments[0];
      console.log(result);
    }
    return result;
  }
};

console.log(power(4, 3)); // 64
console.log(power(3, 10)); // 59049

const factorial = function(number) {
  let result = 1;
  if (number === 0 || number === 1) {
    return result;
  } else {
    for(i=2; i <= number; i++) {
      result *= i;
    }
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
