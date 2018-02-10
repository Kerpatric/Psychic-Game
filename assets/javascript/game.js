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
    //This is where we take the HTML element and set it equal to guessLeft.
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessLeft;
};

var updateLetterToGuess = function () {
    this.toGuess = this.computerPick[Math.floor(Math.random() * this.computerPick.length)];
};

var updateGuessesSoFar = function () {
    //This logic takes the letters used so far and displays them separated by commas.
    document.querySelector('#soFar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//This function is will reset everything when the game begins again.
var reset = function () {
    totalGuesses = 9;
    guessLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

//this function is run when the user presses a key.
document.onkeypress = function(event) {
    var userGuess = string.fromCharCode(event.keyCode);
    guessLeft--;

    //This uses the push method to add the keypressed letter to the end of the guessedLetters
    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

    //If the user guesses correctly, This loop adds +1 to wins and resets our other counters.
    if (guessLeft > 0) {
        if (userGuess === letterToGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            reset();
        }
    }

    //If the user guesses incorrectly
    else if (guessLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        reset();
    }
};

