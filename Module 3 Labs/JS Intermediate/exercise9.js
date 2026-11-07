// JS Intermediate Lab Exercise 9

// Given the below salaries object, perform the following tasks.

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
// b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((total, salary) => total + salary, 0);
}

console.log(sumSalaries(salaries));

function topEarner(salaries) {
  return Object.entries(salaries).reduce((top, current) => {
    return current[1] > top[1] ? current : top;
  })[0];
}

console.log(topEarner(salaries));
