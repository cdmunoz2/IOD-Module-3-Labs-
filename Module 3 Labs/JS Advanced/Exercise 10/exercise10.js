// JS Advanced Lab Exercise 10

// Fetch is a browser-based function to send a request and receive a response from a server, which uses promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status code, and returns a promise containing the JSON sent by the remote server if successful or an error if it failed. (To run this code in a node.js environment, follow the instructions in the comments before the function.)
// a) Write a new version of this function using async/await
// b) Test both functions with valid and invalid URLs
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.

// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'

import fetch from "node-fetch";
globalThis.fetch = fetch;

function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

async function fetchURLDataAsync(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

fetchURLDataAsync("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

const badURL = "https://jsonplaceholder.typicode.com/todos/invalid";

fetchURLData(badURL)
  .then((data) => console.log("original:", data))
  .catch((error) => console.error("original:", error.message));

fetchURLDataAsync(badURL)
  .then((data) => console.log("async:", data))
  .catch((error) => console.log("async:", error.message));

async function fetchAllURLData(urls) {
  const promises = urls.map((url) => fetchURLDataAsync(url));
  const results = await Promise.all(promises);
  return results;
}

fetchAllURLData([
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
])
  .then((results) => console.log(results))
  .catch((error) => console.log("all:", error.message));
