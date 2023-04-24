'use strict'
//EVENT IS STH THAT HAPPENS ON THE PAGE
//WE NEED TO SELECT THE ELEMENT WHERE THE EVENT WILL HAPPEN
//The Math.trunc() static method returns the integer part of a number by removing any fractional dilet
/*let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20
let highScore = 0
document.querySelector('.check').addEventListener('click',function() {
    //const guess = document.querySelector('.guess').value
   // console.log(guess)
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)
     if (!guess){
        document.querySelector('.message').textContent= '🩸No number!'
    } else if (guess === secretNumber) {
         document.querySelector('.message').textContent='🍕Correct Number'
         document.querySelector('.number').textContent = secretNumber
         document.querySelector('.label-score').textContent = 'You won the game'
         document.querySelector("body").style.backgroundColor = '#0466c8'
         document.querySelector('.number').style.width = '30rem'
         if (score > highScore) {
             highScore = score
             document.querySelector('.highscore').textContent = highScore
         }
     } else if (guess < secretNumber) {
         if (score > 0) {
             document.querySelector('.message').textContent = '👁️👄👁️Lol Too Low!'
             score--
             document.querySelector('.label-score').textContent = '💯 Score:' + score
         } else {
             document.querySelector('.message').textContent = "😭You lost the game"
         }
     }  else if (guess > secretNumber) {
         if (score > 0) {
             document.querySelector('.message').textContent = '👁️👄👁️Lol Too High!'
             score--
             document.querySelector('.label-score').textContent = '💯 Score:' + score
         } else {
             document.querySelector('.message').textContent = '😭You lost the game!'
         }
     }
})
/*document.querySelector('.again').addEventListener('click',function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) +1;
    document.querySelector('.message').textContent='Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').textContent = ''
    document.querySelector("body").style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})*/

/*document.getElementById('#again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
//IMPLEMENTING HIGH-SCORE
*/
const checkButton = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const messageDisplay = document.querySelector('.message');
const numberDisplay = document.querySelector('.number');
const scoreLabel = document.querySelector('.label-score');
const highScoreDisplay = document.querySelector('.highscore');
const body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
    messageDisplay.textContent = message;
}

function displayScore(score) {
    scoreLabel.textContent = `💯 Score: ${score}`;
}

function displayNumber(number) {
    numberDisplay.textContent = number;
}

function displayHighScore(highScore) {
    highScoreDisplay.textContent = highScore;
}

function resetGame() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayNumber('?');
    displayMessage('Start guessing...');
    displayScore(score);
    guessInput.value = '';
    body.style.backgroundColor = '#222';
    numberDisplay.style.width = '15rem';
}

checkButton.addEventListener('click', function() {
    const guess = Number(guessInput.value);

    if (!guess) {
        displayMessage('🩸 No number!');
    } else if (guess === secretNumber) {
        displayMessage('🍕 Correct Number!');
        displayNumber(secretNumber);
        displayScore('You won the game');
        body.style.backgroundColor = '#0466c8';
        numberDisplay.style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            displayHighScore(highScore);
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '👁️👄👁️ Too High!' : '👁️👄👁️ Too Low!');
            score--;
            displayScore(score);
        } else {
            displayMessage('😭 You lost the game!');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', resetGame);
