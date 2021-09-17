'use strict';

// Generating random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Variables
let score = 20;
let highScore = 0;

// Displaying the hint messages
const displayHint = function (message) {
  document.querySelector('.hint').textContent = message;
};

// Check number button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayHint('No number entered 🧐');
  } else if (guess === secretNumber) {
    displayHint("You've guessed it 🥳");
    document.querySelector('.game-container').style.backgroundColor = '#60b347';
    document.querySelector('.secret').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayHint(guess > secretNumber ? 'Too high 🔴' : 'Too low 🔵');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayHint('GAME OVER 💀');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset game button
document.querySelector('.reset').addEventListener('click', function () {
  document.querySelector('.game-container').style.backgroundColor = '#f7f7f7';
  displayHint('Start guessing 😎');
  document.querySelector('.secret').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
