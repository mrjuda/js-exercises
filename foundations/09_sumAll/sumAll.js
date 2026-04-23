const sumAll = function(a, b) {
  let A;
  let B;
  let result;

  // console.log(Number.isInteger(a));
  // console.log(Number.isInteger(b));

  if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
    return 'ERROR';
  } else if(a < 0 || b < 0) {
    return 'ERROR';
  } else if (a === b) {
    return a;
  } else if (a > b) {
    A = b;
    B = a;
    result = A;
  } else {
    A = a;
    B = b;
    result = A;
  }

  for(let i = 1; i <= B - A; i++) {
    result += A + i;
  }
  // console.log(result);
  return result;
}


console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
