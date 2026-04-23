const convertToCelsius = function(temp) {
  let result = (temp - 32) * (5/9);
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  let result = (temp * 9/5) + 32;
  return Math.round(result * 10) / 10;
};

console.log(convertToCelsius(-100));
console.log(convertToCelsius(32));
console.log(convertToCelsius(100));


console.log(convertToFahrenheit(-100));
console.log(convertToFahrenheit(0));
console.log(convertToFahrenheit(100));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
