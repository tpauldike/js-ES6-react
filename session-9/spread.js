const names = [
	"Abiodun",
	"Topman",
	"Ibrahim",
	"Gloria",
	"Ebube",
	"Naheemah",
	"Samuel",
];

const copyOfNames = [...names];

copyOfNames[6] = "Solomon";

// console.log("copy ==> " + copyOfNames);
// console.log("original ==> " + names);

const addNumbers = (...numbers) => {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	console.log(`the sum of the numbers is: ${sum}`);
};

addNumbers(2, 4, 8, 6, 2, 4, 6, 9, 3, 1);
