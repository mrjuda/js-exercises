const leapYears = function(year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 4 === 0) {
      return true;
  } else {
    return false;
  }
};

console.log(leapYears(1900)); // false
console.log(leapYears(1996)); // true
console.log(leapYears(2000)); // true
console.log(leapYears(1985)); // false

// Do not edit below this line
module.exports = leapYears;
