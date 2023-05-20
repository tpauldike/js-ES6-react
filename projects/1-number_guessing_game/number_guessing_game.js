const prompt = require("prompt-sync")();

// Initialize game variables
let currentLevel = 1;
let totalPoints = 0;
let minRange = 1;
let maxRange = 2;
let lives = 3;
let secretNumber = Math.floor(Math.random() * maxRange + minRange);

// Ask for player's name
let playerName = prompt("Hi! What is your name?-> ");

// Keep asking for player's name if none is provided
while (!playerName) {
	playerName = prompt("Kindly enter your name...👋-> ");
}

// Define the function to start the game
const playGame = () => {
	// Define the function to greet the player and provide game instructions
	const welcomePlayer = () => {
		// Greet the player and wait for them to press Enter to continue
		console.log(
			`\nHello ${playerName}, Welcome to the Number Guessing Game! 🤗\n`
		);
		prompt("Press Enter to continue... ");

		// Provide game instructions and ask the player if they're ready to play
		console.log(
			`\nIn this game, you will be presented with a secret number, and you have to guess it correctly. 🤔\nYou will start with 3 lives, and the range of the numbers you can choose from will increase as you advance to higher levels. 🏆\nFor every streak of 3 guesses, you will get an additional life. 🎉\nTo make a guess, simply enter a number within the range provided. 🔢\nIf your guess is too high or too low, I will give you a hint to help you get closer. 🔍\nIf you run out of lives, the game is over, but don't worry, you can always start again! 🤞\nGood luck! 🍀`
		);

		// Prompt the player to confirm whether they are ready to play the game or not
		let confirmPlay = prompt(
			"\nAre you ready to play?\tType 'yes' or 'no'-> "
		);

		// Use a loop to keep asking the player until they enter a valid response
		while (confirmPlay) {
			if (confirmPlay.toUpperCase() === "YES") {
				console.log("\nLet's play! Good luck! 🎮\n");
				break;
			} else if (confirmPlay.toUpperCase() === "NO") {
				console.log("\nThank you and Goodbye! 👋\n");
				return process.exit();
			} else {
				confirmPlay = prompt(
					"Kindly type 'yes' to play game or 'no' to exit 🤔-> "
				);
			}
		}
	};

	// Define a function to display the game statistics in a table
	const displayGameStats = () => {
		console.table({
			"Player Name": playerName,
			"Current Level": currentLevel,
			"Total Points": totalPoints,
			"Lives Left": lives,
		});
	};

	// Define the function to end a round
	const endRound = (result) => {
		// Congratulate the player and increase their points and level
		console.log(`Congratulations! You ${result} this round!👏`);
		prompt("Press enter to continue... ");
		totalPoints++;
		currentLevel++;
		// Increase the max range and generate a new secret number
		maxRange++;
		secretNumber = Math.floor(Math.random() * maxRange + minRange);
		// Increase the number of lives if the player reaches a streak of 3 guesses
		lives += Math.floor(currentLevel / 4);
		// Display the game stats and start a new round
		displayGameStats();
		playRound();
	};

	// Define the function to end the game
	const endGame = (result) => {
		// Inform the player that the game is over
		console.log(`Oh no! You ${result} the game. Better luck next time!😢`);
		// Display the final game stats
		displayGameStats();
		// Print a thank you message to the console to signify the end of the game
		console.log("Thanks for playing! 🙌");
		return;
	};

	// Define the function to play a round
	const playRound = () => {
		// Ask the player to guess the secret number
		let playerGuess = prompt(
			`Guess a number between ${minRange} and ${maxRange}🤔-> `
		);

		// Keep asking the player to guess until they get the secret number or run out of lives
		while (playerGuess !== secretNumber) {
			// End the game if the player runs out of lives
			if (lives <= 0) {
				endGame("lost👎");
				return;
			}
			// Ask the player to enter a number if their guess is not a number
			else if (Number.isNaN(parseInt(playerGuess))) {
				playerGuess = prompt("Please enter a number🔢-> ");
			}

			// Tell the player their guess is too high and reduce a life
			else if (playerGuess > secretNumber) {
				lives--;
				console.log(`You are left with ${lives} live(s)`);
				if (lives === 0) {
					console.log("Warning!!!, This is your last guess\n");
				}
				playerGuess = prompt(
					"Guess too high, try guessing a lower number🔽-> "
				);
			}
			// Tell the player their guess is too low and reduce a life
			else if (playerGuess < secretNumber) {
				lives--;
				console.log(`You are left with ${lives} live(s)`);
				if (lives === 0) {
					console.log("Warning!!!, This is your last guess\n");
				}
				playerGuess = prompt(
					"Guess too low, try guessing a higher number🔼-> "
				);
			} else {
				// End the round if the player guesses the secret number
				endRound("won🎉");
				break;
			}
		}
	};

	welcomePlayer();
	displayGameStats();
	playRound();
};

// Start the game
playGame();
