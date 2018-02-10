//This is the javaScript logic of the Psychic game


//Creates and array that lists out all of the options
var computerPick = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Creating variables to hold the number of wins, losses, and Gusses. 
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessedLetters = [];
var toGuess = null;

//Randomly chooses a letter from the computerPick array. This is the letter the computer is thinking of.
var computerThink = computerPick[Math.floor(Math.random() * computerPick.length)];

//Limits the users guesses
var updateGuessesLeft = function () {
    //This is where we take the HTML element and set it equal to guessesLeft.
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function () {
    this.toGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function () {
    //This logic takes the letters used so far and displays them separated by commas.
    document.querySelector('#soFar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//This function is will reset everything when the game begins again.
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

//this function is run when the user presses a key.
document.onkeyup = function (event) {
    guessesLeft--;

    //This converts the key press in to a string and makes it lower case.
    var userGuess = string.fromCharCode(event.keyCode).toLowerCase();

    //This uses the push method to add the keypressed letter to the end of the array userGuess
    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess === letterToGuess) {
                wins++;
            }
        }

    // This Logic decides the outcome of the game, and changes the counters accordingly

    if ((userGuess === computerThink)) {
        wins++;
        guessLeft = 10;
        guessedLetters = 0;
    }
    else if ((userGuess != computerThink) && (guessLeft > 0)) {
        guessLeft--;
    }


};