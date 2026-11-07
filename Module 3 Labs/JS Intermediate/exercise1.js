// JS Intermediate Lab Exercise 1

// Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.

// console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ucFirstLetters(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("las vegas"));
console.log(ucFirstLetters("san francisco"));
console.log(ucFirstLetters("new york city"));
