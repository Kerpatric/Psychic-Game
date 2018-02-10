//This is the javaScript logic of the Psychic game


//Creates and array that lists out all of the options
var computerPick = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Creating variables to hold the number of wins, losses, and Gusses. 
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessSoFar = 0;

//this function is run when the user presses a key.
document.onkeyup = function(event)  {

    //Determines what key was pushed.
    var userGuess = event.key;

    //Randomly chooses a letter from the computerPick array. This is the letter the computer is thinking of.
    var computerThink = computerPick[Math.floor(Math.random() * computerPick.length)]
    
    // This Logic decides the outcome of the game, and changes the counters accordingly

    if ((userGuess === computerThink)) {
        wins++;
        guessLeft = 10;
        guessSoFar = 0;
    }
    else if ((userGuess == computerThink) && (guessLeft > 0)) {
        guessLeft--;
    }
}