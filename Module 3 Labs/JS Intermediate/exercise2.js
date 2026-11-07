// JS Intermediate Lab Exercise 2

// Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. It should return either the truncated text, with an ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.

function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max - 3) + "...";
  }
  return str;
}

console.log(truncate("This text will be truncated if it is too long", 25));
// This text will be truncat...

console.log(truncate("This text will not be truncated", 35));

function ternaryTruncate(str, max) {
  return str.length > max ? str.slice(0, max - 3) + "..." : str;
}

console.log(ternaryTruncate("This text will be truncated", 25));
console.log(ternaryTruncate("This text will not be truncated", 35));
