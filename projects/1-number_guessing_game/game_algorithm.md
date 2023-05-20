# Number Guessing Game Algorithm
The Number Guessing Game algorithm follows a step-by-step process to generate a random number, prompt the player for guesses, and provide feedback based on the guess.

Here is the algorithm used in the Number Guessing Game:

1. Start the game by initializing the score, number of attempts, and target number variables.

2. Generate a random number within a predefined range and store it as the target number.

3. Start a loop that continues until the player either guesses the correct number or runs out of attempts.

4. Inside the loop, prompt the player to enter their guess.

5. Validate the input to ensure it is a valid number within the range. If the input is invalid, prompt the player to enter a valid guess.

6. Compare the player's guess with the target number.

7. If the guess is correct, increment the score based on the number of remaining attempts and break out of the loop.

8. If the guess is too high, provide feedback to the player that their guess was too high.

9. If the guess is too low, provide feedback to the player that their guess was too low.

10. Decrement the number of remaining attempts.

11. Repeat steps 4-10 until the player either guesses the correct number or runs out of attempts.

12. After the loop ends, display the player's final score and provide a remark based on their performance.

13. End the game.

The algorithm ensures that the player has a limited number of attempts to guess the correct number and provides feedback after each guess to guide them towards the correct answer.

For a more detailed understanding of the implementation, you can refer to the [source code](./number_guessing_game.js) of the Number Guessing Game.