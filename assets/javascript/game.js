//Javascrip For Psychic Game

// Letter Choices To Pick From
var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//Setting The Index For the varianbles to 0
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [] //set to empy for new array
var letterToGuess = null; //Set to null because the amount of possible guesses is undefined

//Allows the computer to select the total amount of choices based on the top array
var computerGuesses = letterChoices[Math.floor(Math.random() * letterChoices.length)];

//Variable to grab guesses left and allow 9 guesses
var updateGuessesLeft = function() {
    
    document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
    this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
};

var updateGussesSoFar = function() {
    document.querySelector('#totalGuesses').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ')
};

//Reset function
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

//Key release allowing the interactive users guess
document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

guessedLetters.push(userGuess);
updateGuessesLeft();
updateGuessesSoFar();

if (guessesLeft > 0) {
    if (userGuess == letterToGuess){
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        alert("Yes, you are psychic!");
        reset();
    }
}else if(guessesLeft == 0) {
    losses++;
    document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
    alert("Sorry, you're not psychic, mabye try again?");

    reset();
   }
};