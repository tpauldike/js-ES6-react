const book = {
    cover: true,
    beatifulDesign: true,
    pages: 204,
    title: "Things fall apart",
    author: { name: "Abiodun Akpan", age: 93, hobbies: ["football,", "movies", "swimming"]},
    published: 2009,
    review: [2012, 2013, 2020],
  }; // key-value pairs, keys might be written as strings or , values could be anything
  
const { title, published } = book;
const {"name": authorName} = book.author; 

  console.log(title + '\n', authorName + '\n', published);

  const attendance = ["Topman", "Gold Kid", "Ebube", "Capenter John", "Melvin", "Abiodun"];

const [firstPosition, secondPosition, thirdPosition] = attendance;
console.log(firstPosition);
console.log(secondPosition);
console.log(thirdPosition);
