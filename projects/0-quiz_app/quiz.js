#!/usr/bin/env node
const prompt = require('prompt-sync')();

let n = 8; //total number of questions currently
const quiz = {
  Q1: {
    question: "Who is the founder of CodeTrybe?",
    options: [
      "a. Abiodun Shittu",
      "b. Topman Paul-Dike", //correct
      "c. Ebube Anyanwu",
      "d. Naheemah Bello",
    ],
  },
  Q2: {
    question: "When is CodeTrybe PLD?",
    options: [
      "a. Weekends",
      "b. Work days",
      "c. ALX peer learning days",
      "d. Daily or very often", //correct
    ],
  },
  Q3: {
    question: "_____ is the 'lion' that checks for plagiarism in ALX SWE",
    options: ["a. Julien Barbier", "b. AI", "c. Kimba", "d. ChatGPT"],
  },
  Q4: {
    question: "The ALX SWE program actually last for ______",
    options: [
      "a. 12 months",
      "b. 13 months", //correct
      "c. 9 months foundation",
      "d. 3 months specilization",
    ],
  },
  Q5: {
    question:
      "Which of the following is a necessary requirement for the ALX SWE program?",
    options: [
      "a. Bachelor's degree in computer",
      "b. A good andriod phone and a mentor",
      "c. PC, access to a good network and enough internet data", //correct
      "d. YouTube tutorials",
    ],
  },
  Q6: {
    question: "What is Topman's best food?",
    options: [
      "a. Garri and soup",
      "b. Rice and beans",
      "c. All foods, as long as it is eadable",
      "d. Anything hygienic, nutritious and tasty", //correct
    ],
  },
  Q7: {
    question: "React.js is a _____________",
    options: [
      "a. Programming language for frontend development",
      "b. Language written in C",
      "c. C Static libray",
      "d. JavaScript framework", //correct
    ],
  },
  Q8: {
    question: "What does ES6 stand for?",
    options: [
      "a. Estreem Solitude 6",
      "b. Evaluation Standard 6",
      "c. EcmaScript 6", //correct
      "d. Evolution Storm 6",
    ],
  },
};

const questionNumber = [
  quiz.Q1,
  quiz.Q2,
  quiz.Q3,
  quiz.Q4,
  quiz.Q5,
  quiz.Q6,
  quiz.Q7,
  quiz.Q8,
];

// Print any question between 1 - n; for debugging purposes
function printQuestion(number) {
  if (!number) {
    console.log("Please enter the question number.\ne.g: 'printQuestion(5);'");
  } else {
    console.log(questionNumber[number - 1].question);
    for (let option = 0; option < 4; option++) {
      console.log(questionNumber[number - 1].options[option]);
    }
  }
}
// Print all questions from 1 - n; for debugging purposes
function printAllQuestions() {
  for (let x = 1; x <= n; x++) {
    console.log("QUESTION", x + ":");
    printQuestion(x);
    console.log("\n");
  }
}

//Uncomment these to test the functions
// printQuestion();
// printQuestion(1);
// printAllQuestions();

const answers = ["b", "d", "c", "b", "c", "d", "d", "c"];

let answer,
  passed = 0,
  failed = 0,
  score = 0,
  user,
  percentage,
  totalScore = n * 5;

function checkOption(theOption){
	let choice = theOption.toLowerCase();
	if (choice.charCodeAt(0) < 97 || choice.charCodeAt(0) > 100){
		return false;
	}
}

function askQuestion(number){
	if (number < 1 || number > n){
		console.log("There's no question with that number!");
	} else {
		answer = prompt(printQuestion(number));
		let check = checkOption(answer);
		if (answer === answers[number-1].toLowerCase()){
			console.log(`Option '${answer}' is correct! You earned 5 marks`);
			passed += 1;
			score += 5;
		} else if (check === false){
			console.log(`'${answer}' is an invalid option; only options 'a' - 'd' are valid.\nYou've lost all your marks so far!!`);
			score = 0;
		} else {
			console.log(`Option '${answer}' is wrong! You lost 3 marks`);
			failed += 1;
			score -= 3;
		}
		console.log(`\t[current score: ${score}]\n`);
	}
}

//The quiz begins here
user = prompt("Ready for the quiz? Let's know your name: ");
for (let number = 1; number <= n; number++){
	askQuestion(number);
}
console.log(`The quiz is over!\nYou answered ${passed} questions correctly, out of ${n} questions, and you failed ${failed}`);
console.log('\nFinal result, loading...\n');
percentage = (score/totalScore) * 100
console.log(`You scored ${score}/${totalScore}, and that is about ${percentage}%`);

if (percentage < 40) {
	console.log(`Not good enough, ${user}, you may want to try again`);
} else if (percentage >= 90){
	console.log(`Congratulation, ${user}! You did so well`);
} else {
	console.log(`That was a good one, ${user}!`);
}
