const convertToCelsius = function(temperature) {
  // fahrenheit to celsius, should return 0
  return Math.round(((temperature - 32) * (5/9) * 10))/10;
};

const convertToFahrenheit = function(temperature) {
  // celsius to fahrenheit, should return 32
  return Math.round(((temperature * 9/5) + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
