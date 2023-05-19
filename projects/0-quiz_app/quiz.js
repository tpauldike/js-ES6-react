const prompt = require("prompt-sync")();
const quiz = require("./data.js");

const totalQuestions = Object.keys(quiz).length;
const questions = Object.values(quiz);

let score = 0;
let passed = 0;
let failed = 0;
let user;

// Regular expression to check if a given option is valid (only a, b, c, and d are valid)
const checkOption = (option) => /^[a-d]$/.test(option);

// Function to ask a specific question
const askQuestion = (number) => {
	if (number < 1 || number > totalQuestions) {
		console.log("There's no question with that number!");
	} else {
		const { question, options, answer } = questions[number - 1];
		console.log(question);
		options.forEach((option) => console.log(option));
		const userAnswer = prompt("Enter your answer: ").toLowerCase();
		if (!checkOption(userAnswer)) {
			console.log(
				`'${userAnswer}' is an invalid option; only options 'a' - 'd' are valid.\nYou've lost all your marks so far!!`
			);
			score = 0;
		} else if (userAnswer === answer.toLowerCase()) {
			console.log(
				`Option '${userAnswer}' is correct! You earned 5 marks`
			);
			passed++;
			score += 5;
		} else {
			console.log(`Option '${userAnswer}' is wrong! You lost 3 marks`);
			failed++;
			score -= 3;
		}
		console.log(`\t[current score: ${score}]\n`);
	}
};

// Starting the quiz by asking the user's name
console.log("Welcome to the Quiz!");
user = prompt("Ready for the quiz? Let's know your name: ");

// Asking all questions one by one
for (let number = 1; number <= totalQuestions; number++) {
	askQuestion(number);
}

// Calculating the user's final score and percentage
const percentage = ((score / (totalQuestions * 5)) * 100).toFixed(2);

// Displaying the final result to the user
console.log(
	`The quiz is over!\nYou answered ${passed} questions correctly, out of ${totalQuestions} questions, and you failed ${failed}`
);
console.log(
	`Final result: You scored ${score}/${totalQuestions * 5} (${percentage}%).`
);

// Checking the user's performance and displaying a message accordingly
if (percentage < 40) {
	console.log(`Not good enough, ${user}, you may want to try again`);
} else if (percentage >= 90) {
	console.log(`Congratulation, ${user}! You did so well`);
} else {
	console.log(`That was a good one, ${user}!`);
}
