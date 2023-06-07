# Multiple Choice Quiz App
## About the Project
This is about a simple `JavaScript` program that gives the user some quiz with 4 options (a - d) to choose the correct answer from, and scores the user, each time.

The following functionalities were incorporated in the program:
1. The user's name is stored before the quiz starts
2. Each correct answer attracts 5 marks
3. 3 marks are lost each time the user fails a question
4. Inputting invalid option will cost the user his entire previous scores
5. The final score is printed in the end and the percentage is calculated, and the user gets some remark.

The program was written and tested on the command line in a Linux environment, using the text editor, `vim`.

## How to run the Quiz App
To run the program you need to:
- get the codes saved on your machine
- ensure it is executable (or run `chmod u+x <file_name>` on the command line)
- in addition to `node js`, install prompt-sync as follows: `sudo apt update -y ; sudo apt install prompt-sync`
- run the script (`./<file_name>`) or pass it as an argument to `node`, as in `node <file_name>`

## Live Presentation & the Algorithm Used
This project was presented live in this [YouTube video](https://youtu.be/yEcHSZppLog)

If you are interested in the lines of code and the logic behind them, you may want to pay attention to [my algorithm](./my_algorithm.md).

Note that the file named `test` here is just holding the initial codes that I wanted to use to get inputs from the user, while I was trying them out to see which will work well for me.

---

#### Author: [Topman Paul-Dike](https://github.com/tpauldike)

### Contributor: [Abiodun Shittu](https://github.com/Abiodun-Shittu)

## Contribution
The quiz app was refactored to improve code readability, modularity, and maintainability. The following changes were made:

- Modularization: The code was modularized by separating the quiz data from the main code. The quiz questions and answers were moved to a separate module for better organization and reusability.

- Object-oriented Programming: Object-oriented programming principles were implemented to encapsulate the quiz logic into functions. This approach promotes code reusability and improves code clarity. Object destructuring was also utilized to extract relevant properties from the quiz data.

- Input Validation: Regular expressions were used to validate user input for options. This ensures that only valid options (a - d) are accepted, providing a better user experience. Appropriate error messages are displayed for invalid inputs.

- Scoring System: The scoring system was enhanced by separating the scoring logic into distinct functions for correct and incorrect answers. This improves code organization and makes it easier to modify the scoring rules in the future if needed.

- User Feedback: The refactored code provides informative messages and feedback to the user throughout the quiz. Users are informed about correct and incorrect answers, their current score, and the percentage achieved at the end of the quiz.

These refractories improve the overall quality of the codebase, making it more maintainable and extensible. The changes also enhance the user experience by providing clear instructions and feedback during the quiz.
