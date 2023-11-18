'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const p1Score = document.querySelector('#current--0');
const p2Score = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', () => {
  let roll = Math.floor(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${roll}.png`;
  if (roll == 1) {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  } else {
    currentScore += roll;
    document.querySelector(`#current--${activePlayer}`).textContent = '';
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  }
});

btnHold.addEventListener('click', () => {
  let scoreKeep = parseInt(
    document.querySelector(`#current--${activePlayer}`).textContent
  );
  document.querySelector(`#score--${activePlayer}`).textContent =
    parseInt(document.querySelector(`#score--${activePlayer}`).textContent) +
    scoreKeep;
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;

  if (`scores--${activePlayer}`.textContent >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  }
});

btnNew.addEventListener('click', () => {
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
});
