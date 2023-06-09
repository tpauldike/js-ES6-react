let age = 20;
// if (age >= 18 && age < 60) {
// 	console.log("You are an adult")
// } else if(age < 18) {
// 	console.log("You are a minor")
// } else {
// 	console.log("Sorry, You are too old");
// }


// Syntax ==>  condition ? expression1 : expression2
/**
 * if condition is true, expression1 is executed
 * if condition is false, expression2 is executed
 */

let message = age >= 18 && age < 60 ? "You are an adult" : age < 18 ? "You are a minor" : "Sorry, You are too old"

console.log(message);