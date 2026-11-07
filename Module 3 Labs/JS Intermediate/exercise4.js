// JS Intermediate Lab Exercise 4

// Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

const capitalize = (str) => {
  if (typeof str !== "string" || !str.length) return str;
  return str[0].toUpperCase() + str.substring(1);
};

const camelCase = (cssProp) => {
  return cssProp
    .split("-")
    .map((word, index) => {
      if (!index) return word;
      return capitalize(word);
    })
    .join("");
};

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// Classic for without Ternary
const camelCaseFor = (cssProp) => {
  const words = cssProp.split("-");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      result += words[0];
    } else {
      result += capitalize(words[i]);
    }
  }
  return result;
};

console.log(camelCaseFor("margin-left")); // marginLeft
console.log(camelCaseFor("background-image")); // backgroundImage
console.log(camelCaseFor("display")); // display

// Classic for with Ternary
const camelCaseForTernary = (cssProp) => {
  const words = cssProp.split("-");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    result += i === 0 ? words[0] : capitalize(words[i]);
  }
  return result;
};

console.log(camelCaseForTernary("margin-left")); // marginLeft
console.log(camelCaseForTernary("background-image")); // backgroundImage
console.log(camelCaseForTernary("display")); // display

// for of without Ternary
const camelCaseForOf = (cssProp) => {
  const words = cssProp.split("-");
  let result = "";
  let i = 0;

  for (const word of words) {
    if (i === 0) {
      result += words[0];
    } else {
      result += capitalize(word);
    }
    i++;
  }
  return result;
};

console.log(camelCaseForOf("margin-left")); // marginLeft
console.log(camelCaseForOf("background-image")); // backgroundImage
console.log(camelCaseForOf("display")); // display

// for of with Ternary
const camelCaseForOfTernary = (cssProp) => {
  const words = cssProp.split("-");
  let result = "";
  let i = 0;

  for (const word of words) {
    result += i === 0 ? words[0] : capitalize(word);
    i++;
  }
  return result;
};

console.log(camelCaseForOfTernary("margin-left")); // marginLeft
console.log(camelCaseForOfTernary("background-image")); // backgroundImage
console.log(camelCaseForOfTernary("display")); // display

// for in without Ternary
const camelCaseForIn = (cssProp) => {
  const words = cssProp.split("-");
  let result = "";

  for (const index in words) {
    if (index === "0") {
      result += words[index];
    } else {
      result += capitalize(words[index]);
    }
  }
  return result;
};

console.log(camelCaseForIn("margin-left")); // marginLeft
console.log(camelCaseForIn("background-image")); // backgroundImage
console.log(camelCaseForIn("display")); // display

// for in with Ternary
const camelCaseForInTernary = (cssProp) => {
  const words = cssProp.split("-");
  let result = "";

  for (const index in words) {
    result += index === "0" ? words[index] : capitalize(words[index]);
  }
  return result;
};

console.log(camelCaseForInTernary("margin-left")); // marginLeft
console.log(camelCaseForInTernary("background-image")); // backgroundImage
console.log(camelCaseForInTernary("display")); // display
