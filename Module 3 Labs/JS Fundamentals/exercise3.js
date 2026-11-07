// JS Fundamentals Lab Exercise 3

// Which of the following console.log messages will print? Why?

if (0) console.log("#1 zero is true"); // Doesn't print, 0 is a falsy.
if ("0") console.log("#2 zero is true"); // Prints, anything in quotes is truthy.
if (null) console.log("null is true"); // Doesn't print, null meaning empty or nothing.
if (-1) console.log("negative is true"); // Prints, 0 is only falsy number so even negatives print.
if (1) console.log("positive is true"); // Prints, non zero numbers are truthy.
