// JS Intermediate Lab Exercise 8

// The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");
phoneBookABC.set("Caroline", "0455221265");

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialize the contents of phoneBookDEF by passing in an array of keys/values
// c) Update the phone number for Caroline
// d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
// e) Combine the contents of the two individual Maps into a single phoneBook Map
// f) Print out the full list of names in the combined phone book

const phoneBookDEF = new Map([
  ["Daniel", "0412315847"],
  ["Edward", "0412318596"],
  ["Felicia", "0412311425"],
]);

function printPhoneBook(contacts) {
  contacts.forEach((phoneNumber, name) => {
    console.log(name + ": " + phoneNumber);
  });
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

printPhoneBook(phoneBook);

phoneBook.forEach((phoneNumber, name) => {
  console.log(name);
});
