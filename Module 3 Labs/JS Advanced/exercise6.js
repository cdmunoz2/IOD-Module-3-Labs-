// JS Advanced Lab Exercise 6

// Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay the call to that function by ms milliseconds.

Function.prototype.delay = function (ms) {
  const func = this;
  return function (...args) {
    setTimeout(() => func.apply(this, args), ms);
  };
};

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

function sum(a, b, c) {
  console.log(a + b + c);
}

multiply.delay(500)(5, 5, 5, 5);
sum.delay(1000)(1, 2, 3);

// a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters
// b) Use apply to improve your solution so that delayed functions can take any number of parameters
// c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.
