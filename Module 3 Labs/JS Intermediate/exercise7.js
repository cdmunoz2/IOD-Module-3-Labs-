// JS Intermediate Lab Exercise 7

// Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks.

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.
// b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
// c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.
// d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial.
// e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.

function getBookTitle(bookId) {
  const book = books.find((b) => b.id === bookId);
  return book.title;
}

console.log(getBookTitle(1));
console.log(getBookTitle(5));

function getOldBooks() {
  return books.filter((b) => b.year < 1950);
}

console.log(getOldBooks());

function addGenre() {
  return books.map((book) => ({
    ...book,
    genre: "classic",
  }));
}

console.log(addGenre());

function getTitles(authorInitials) {
  return books
    .filter((book) => book.author.startsWith(authorInitials))
    .map((book) => book.title);
}

console.log(getTitles("F"));
console.log(getTitles("H"));
console.log(getTitles("G"));

function latestBook() {
  let latestYear = 0;

  books.forEach((book) => {
    if (book.year > latestYear) {
      latestYear = book.year;
    }
  });
  return books.find((book) => book.year === latestYear);
}

console.log(latestBook());
