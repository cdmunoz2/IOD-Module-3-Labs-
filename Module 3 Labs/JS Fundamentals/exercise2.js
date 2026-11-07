// JS Fundamentals Lab Exercise 2

// Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3";
let four = "4";
let thirty = "30";

// What is the value of the following expressions?
let addition = three + four; // Incorrect (34), should be 7, not getting answer as + sign concatenates strings, remove quotes from value to get correct answer.
let multiplication = three * four; // Correct (12), * sign treats values as numbers.
let division = three / four; // Correct (0.75), / sign treats values as numbers.
let subtraction = three - four; // Correct (-1), - sign treats values as numbers.
let lessThan1 = three < four; // Correct (true)
let lessThan2 = thirty < four; // Incorrect (true), quotes is treating numbers as string and looks at first character and compares: 3(0) vs 4.

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);
