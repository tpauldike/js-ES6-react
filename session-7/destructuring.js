const book = {
  cover: true,
  beatifulDesign: true,
  pages: 204,
  title: "Things fall apart",
  author: {
    name: "Abiodun Akpan",
    age: 93,
    hobbies: ["football,", "movies", "swimming"],
  },
  published: 2009,
  review: [2012, 2013, 2020],
}; // key-value pairs, keys might be written as strings or , values could be anything

const { title: bookTitle, author: { name: authorName }, published} = book;

// console.log(`The book "${bookTitle}" was authored by ${authorName} in the year "${published}"`);
/*
const attendance = [
  "Topman",
  "Gold Kid",
  "Ebube",
  "Capenter John",
  "Melvin",
  "Abiodun",
];

const [firstPosition, secondPosition, thirdPosition] = attendance;

console.log(firstPosition);
console.log(secondPosition);
console.log(thirdPosition);
*/

const yearsOfPublication = [1983, 1999, 2002, 2007, 2013, 2030];
/*
let firstPublication = yearsOfPublication[0];
console.log(yearsOfPublication);
console.log(firstPublication);
firstPublication = 1990;
*/

//Catching the first, third, and fifth elements of an array using destructuring.
const [firstPublication, , thirdPublication, , fifthPublication] = yearsOfPublication;

console.log(yearsOfPublication);
console.log(fifthPublication);
