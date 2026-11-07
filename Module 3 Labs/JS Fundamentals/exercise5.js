// JS Fundamentals Lab Exercise 5

// Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

// Expression starts with const/let.

// function getGreeting(name) {
//   return "Hello " + name + "!";
// }

// A)
const getGreeting = function (name) {
  return "Hello " + name + "!";
};

console.log(getGreeting("John"));

// B)
const arrowGreet = (name) => "Hello " + name + "!";

console.log(arrowGreet("the other John"));
