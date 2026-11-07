// JS Fundamentals Lab Exercise 9

// Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

let moreSports = [...teamSports];
moreSports.push("Soccer");
moreSports.unshift("Football");

console.log(moreSports);

let dog2 = dog1;
dog2 = "Clifford";

console.log(dog2);

let cat2 = { ...cat1 };
cat2.name = "Tom";

console.log(cat2);

console.log(teamSports);
console.log(dog1);
console.log(cat1);

// D) Strings, numbers and booleans are copied when assigned. Arrays and objects are not copied. Analogy: string is a sticky note, where arrays and objects point to the changes updating their values.

// E) Use spread syntax (...) to keep original, "shallow copy" - added spread syntax to teamSports and cat1 to keep copies and originals remain independent.
