// JS Advanced Lab Exercise 2

// The following delayMsg function is intended to be used to delay printing a message until some time has passed.
// a) What order will the four tests below print in? Why?
// b) Rewrite delayMsg as an arrow function
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// d) Use clearTimeout to prevent the fifth test from printing at all.

const delayMsg = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

let cancelledTimerId = setTimeout(delayMsg, 12000, "#5: Delayed by 12000ms");
clearTimeout(cancelledTimerId);

// Print order: 4, 3, 2, 1. Because 4 doesn't have a delay. Then the other 3 have a setTimeout delay in their respective order.
