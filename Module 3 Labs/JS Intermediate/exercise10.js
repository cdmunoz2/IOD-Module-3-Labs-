// JS Intermediate Lab Exercise 10

// The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// a) Print the total number of minutes that have passed so far today
// b) Print the total number of seconds that have passed so far today
// c) Calculate and print your age as: 'I am x years, y months and z days old'
// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.

console.log(
  today.getHours() * 60 +
    today.getMinutes() +
    " minutes have passed so far today",
);

console.log(
  today.getHours() * 3600 +
    today.getMinutes() * 60 +
    today.getSeconds() +
    " seconds have passed so far today",
);

const birthDate = new Date("1990-01-02");

let years = today.getFullYear() - birthDate.getFullYear();
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();

if (days < 0) {
  months--;
  const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
  days += lastMonth.getDate();
}

if (months < 0) {
  years--;
  months += 12;
}

console.log(`I am ${years} years, ${months} months and ${days} days old`);

function daysInBetween(date1, date2) {
  const difference = Math.abs(date2 - date1);
  return difference / (1000 * 60 * 60 * 24);
}

console.log(daysInBetween(new Date("2026-11-03"), new Date("2024-11-05")));
