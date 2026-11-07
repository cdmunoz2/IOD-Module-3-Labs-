// JS Intermediate Lab Exercise 6

// Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values from duplicatesArray.
// Test with the following arrays and create another one of your own.

function unique(duplicateArray) {
  const result = [];

  for (const item of duplicateArray) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const animals = ["giraffe", "elephant", "lion", "elephant", "tiger", "lion"];

console.log(unique(colors)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(animals));
