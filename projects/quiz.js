#!/usr/bin/env node
const userAction = async () => {
  const response = await fetch('https://opentdb.com/api.php?amount=1&category=18');
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson.result.question);
	/*
  for (let i = 0; i < incorrect_answers.length; i++) {
	console.log(myJson.incorrect_answers[i]);
  }
  */
//  console.log(myJson.correct_answer);
}

userAction();
