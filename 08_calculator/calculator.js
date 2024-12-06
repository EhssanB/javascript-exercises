const add = (x,y) => x + y;

const subtract = (x,y) => x - y;

const sum = array => array.reduce((total, currentNum) => total + currentNum, 0);

const multiply = array => array.reduce( (total, currentNum) => total * currentNum );

const power = function(base, exponent) {
  if (exponent == 1) return base

  return base * power(base, exponent - 1)
};

const factorial = function(number) {
	if (number == 0) return 1

  return number * factorial(number - 1)
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
