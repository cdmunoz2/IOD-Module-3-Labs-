// JS Fundamentals Lab Exercise 1

// What are the results of these expressions? (answer first, then use console.log() to check)

console.log("" + 1 + 0); // 10 A string is involved so + joins text left to right
console.log("" - 1 + 0); // -1 minus sign does math so "" is 0
console.log(true + false); // 1 With no strings, true becomes 1 and false becomes 0
console.log(!true); // false ! flips a boolean
console.log(6 / "3"); // 2 "/" does math, so "3" becomes the number 3.
console.log("2" * "3"); // 6 "*" does math
console.log(4 + 5 + "px"); // 9px 4 + 5 does math then adds the string
console.log("$" + 4 + 5); //$45 The string is first, everything after it joins as text not adding
console.log("4" - 2); // 2 minus sign forces math
console.log("4px" - 2); // NaN since 4px can't be fully converted to number with minus doing math
console.log(" -9 " + 5); //  -9 5 one side is string so + joins the text, space included
console.log(" -9 " - 5); // -14 minus sign forces math and space gets trimmed
console.log(null + 1); // 1 in math null becomes 0
console.log(undefined + 1); // NaN in math undefined can't become a number
console.log(undefined == null); // true loose equality treats these 2 as equal to each other
console.log(undefined === null); // false strict equality compares types, they're different
console.log(" \t \n" - 2); // -2 a string w/ only whitespace converts to 0 so it's 0-2

// + joins text if either side is a string
// - * / always forces math, when math doesn't work you get NaN
