//Demonstrating the use of default parameters in JavaScript functions

const greet = (theName = "Topman") => console.log(`Hello ${theName}!`);
/*
greet("Ebube");
greet();
*/
//Template literals :: using backticks
const firstname = "Topman",
  surname = "Paul-Dike",
  skinComplexion = "dark",
  height = 2.6,
  occupation = "Software Engineer",
  personality = "Music";
const bio = `My name is ${firstname} ${surname}. I am the ${personality}, about ${height} 
meters tall. ${firstname} is an exceptional ${occupation}, ${skinComplexion} skinned and 
beautiful, i.e; more than handsome.`;
console.log(bio);