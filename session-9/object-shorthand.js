// without object property shorthand

const username = "Topman";
const age = 40;

const person = {
	username: username,
	age: age
}

// console.log(person);

// with object property shorthand

const person1 = {
	username,
	age
}

// console.log(person1);

// Object.freeze()
const person2 = {
	name: "Gloria",
	age: 12
}
Object.freeze(person2)

person2.name = "Jane";

console.log(person2)
