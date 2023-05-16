# How I approached the Project
### 1. Structure the questions and the options inside the variable `quiz`

The structure used is as follows:

- `quiz` as an object
- `Q1` to `Qn` as an object nested in `quiz`, *where 'n' in 'Qn' is the last question, unknown at the time*
- `question` as a string property of `Qx`, having its value as the question; *'x' could be any number from 1 to n*
- `options` as a array of the options provided

### 2. Have an array of the questions to make them easily accessible
The `Qx` property of `quiz` were all stored in the array, `questioNumber`, for easier access to the questions and their respective options.

### 3. Create the function that will print out the `question` and `options` of `questionNumber[x]`
The function *printQuestion()* was created with the instruction to print the question and options of any question number given to it as the argument. The function *printAllQuestion()* was as well written, to print all the questions and options at once, for debugging purposes.

### 4. Put the correct options in another array, `answers`

### 5. Place checks on the user's input
`checkOption()` checks the option inputed by the user to ensure that it must a, b, c, or d. It does that by:
1. converting the user's input to lowercase
2. making sure that the decimal value of the input is neither lesser than the decimal value of a (which is 97) nor greater than that of d (which is 100)
3. returns false if the option (converted to lowercase) is not a character whose decimal value falls within the range of 97 - 100 (a - d)

### 6. Write the function that can ask a question, check for the answers and score the user.
The function `askQuestion()` meets this demand. Here is the definition:
```js
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
```

The above function carries out the following insturctions:
1. Check whether the question number is less than 1 or greater than `n`
2. Pass the function *printQuestion()* (with its argument as the same one given to *askQuestion*) to the *prompt()* function, for *prompt()* to print the question and options as a prompt and wait for the user's input.
3. Store the user's input in `answer`
4. Check `answer` with the *checkOption()* function to be sure that it is within a - d. Save the result of the check in the variable `check`.
5. If the option contained in `answer` for the question number matches the element at `answers[number-1]`, then it is correct; give a remark, count it as a question `passed`, add 5 marks.
6. Else, if `check`, holding the return value of *checkOption()* has the boolen value *false*, penalize the user, warn him and take his scores back to 0.
7. Else (the option is valid but not the the answer), give a remark, count it as a question `failed`, and subtract 3 marks.
8. Whatever the case, prints the user's current score, saved in the variable `score`, after each question is answered

### 7. Start the program
Harness all the variables and functions and get the quiz app running.
1. Prompt for the user's name
2. Run the *askQuestion()* function above for each of the question number with the help of a for-loop
3. After the quiz, show the number of question passed *(stored in `passed`)*, the total number of question (`n`), and the number of questions failed *(stored in `failed`)*.
4. Evaluate and get the percentage, and show it to the user.
5. Give the user some remark, based on his performance as follows:
  	- percentage < 40%      --- Not good enough
  	- percentage >= 70%     --- Congratulations!
  	- 40 <= percentage < 70%  - A good one
### 8. End the program
