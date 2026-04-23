const reverseString = function(string) {
  let l = string.length;
  let result = '';
  for (let i = l - 1; i >= 0; i--) {
    result += string[i];
  }
  // console.log(string);
  // console.log(l);
  // console.log(result);
  return result;
};

// reverseString('sautum');
// Do not edit below this line
module.exports = reverseString;
