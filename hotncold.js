function hotOrCold() {
var userWin = false;
var count = 0;
var ranNum = Math.floor((Math.random() * 100) + 1);
var pastGuess = [];
function guessGame () {
	var guessNum = prompt('Guess the number! (between 1 and 100)');
    /*Adds guessed numbers to pastGuess Array */
    pastGuess[pastGuess.length] = guessNum;
		if (guessNum == ranNum){
			console.log('You guessed right! Great Job!');
			userWin = true;
		}
		else if (guessNum - ranNum > 50){
			console.log('Guess #' + count + ': ' + 'You are Ice Cold! try again');
		}
		else if (guessNum - ranNum > 40){
			console.log('Guess #' + count + ': ' + 'Fairly Cold...');
		}
		else if (guessNum - ranNum > 30){
			console.log('Guess #' + count + ': ' + 'Slightly warm');
		}
		else if (guessNum - ranNum > 20){
			console.log('Guess #' + count + ': ' + 'Warm!');
		}
		else if (guessNum - ranNum > 10){
			console.log('Guess #' + count + ': ' + 'Toasty!');
		}
		else if(guessNum - ranNum > 5){
			console.log('Guess #' + count + ': ' + 'Extremely Toasty');
		}
		else if (guessNum - ranNum > 3){
			console.log('Guess #' + count + ': ' + 'Hot!!');
		}
		else if (guessNum - ranNum >= 1){
			console.log('Guess #' + count + ': ' + 'Burning up Hot!')
		}
	  
/* For logging number of guesses and checking input */	  
function callCount() {
		if (guessNum < 1 || guessNum > 100){
		console.log('Please enter a number between 1 and 100 ');
	}
	else if(isNaN(guessNum)){
		console.log('Please enter a number between 1 and 100');
	}
    else if(guessNum == " "){
        console.log('Please enter a number between 1 and 100');
    }
	else {
	count++;
	console.log('You guessed ' + guessNum + ' on guess number ' + count );
        }
    console.log('Previous Guess: ' + pastGuess.toString());
    }
callCount();

/* Loop for continuing if guess is incorrect */
function noWin(){
	if (userWin == false){
		guessGame();
	}
	else {
		console.log('You have won! Please start a new game, can you guess the number in less than ' + pastGuess.length + ' tries?');
	}
   }
   noWin();
 }
guessGame(); 
}
hotOrCold();

