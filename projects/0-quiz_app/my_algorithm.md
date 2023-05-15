# How I approached the Project
### 1. Structure the questions and the options inside the variable `quiz`
	- `quiz` as an object
	- `Q1` to `Qn` as an object nested in `quiz`, *where 'n' in 'Qn' is the last question, unknown at the time*
	- `question` as a string property of `Qx`, having its value as the question; *'x' could be any number from 1 to n*
	- `options` as a array of the options provided

### 2. Have an array of the questions to make them easily accessible
The `Qx` property of `quiz` were all stored in the array, `questioNumber`, for easier access to the questions and their respective options.

### 3. Create the function that will print out the `question` and `options` of `questionNumber[x]`
The function *printQuestion()* was created with the instruction to print the question and options of any question number given to it as the argument. The function *printAllQuestion* was as well written, to print all the questions and options at once, for debugging purposes.

### 4. 