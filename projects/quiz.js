const quiz = {
  Q1: {
    question: "Who is the founder of CodeTrybe?",
    options: [
      "a. Abiodun Shittu",
      "b. Topman Paul-Dike",
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
      "d. Daily or very often",
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
      "b. 13 months",
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
      "c. PC, access to a good network and enough internet data",
      "d. YouTube tutorials",
    ],
  },
  Q6: {
    question: "What is Topman's best food?",
    options: [
      "a. Garri and soup",
      "b. Rice and beans",
      "c. All foods, as long as it is eadable",
      "d. Anything hygienic, nutritious and tasty",
    ],
  },
  Q7: {
    question: "React.js is a _____________",
    options: [
      "a. Programming language for frontend development",
      "b. Language written in C",
      "c. C Static libray",
      "d. JavaScript framework",
    ],
  },
  Q8: {
    question: "What does ES6 stand for?",
    options: [
      "a. Estreem Solitude 6",
      "b. Evaluation Standard 6",
      "c. EcmaScript 6",
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

// console.log(questions);

function printAllQuestions() {
  for (let x = 0; x < 8; x++) {
    console.log(questionNumber[x].question);
    for (let option = 0; option < 4; option++) {
      console.log(questionNumber[x].options[option]);
    }
    console.log("\n");
  }
}

// printAllQuestions();

function printQuestion(number) {
  if (!number) {
    console.log("Please enter the question number.\ne.g: 'printQuestion(5);'");
  } else {
	console.log("QUESTION", number+':');
    console.log(questionNumber[number - 1].question);
    for (let option = 0; option < 4; option++) {
      console.log(questionNumber[number - 1].options[option]);
    }
  }
}

function all(){
	for (let x = 1; x <= 8; x++){
		printQuestion(x);
		console.log('\n');
	}
}

// printQuestion();
all();
//How each question should print:

// console.log(quiz.Q1.question);
// for (let i = 0; i < 4; i++){
// 	console.log(quiz.Q1.options[i]);
// }
