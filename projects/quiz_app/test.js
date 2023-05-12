/*
const quizTime = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

quizTime.question(`Enter your name, please: `, (answer) => {
  console.log(
    `You are welcome ${answer}!!!\nYou've have full access to the PC`
  );
  quizTime.close();
});
*/

// const inquirer = require('inquirer');
import { prompt } from "inquirer";

const questions = [
  {
    type: "input",
    name: "name",
    message: "What's your name? ",
  },
];

prompt(questions).then((answers) => {
  console.log(`Hi ${answers.name}!`);
});
  