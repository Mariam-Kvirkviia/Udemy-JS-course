let score = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let roll = document.querySelector('.btn--roll');
let image = document.querySelector('.dice');
let scores, play, numero, activePlayer, currentScore;
function newGame() {
  scores = [0, 0];
  play = true;
  numero = 0;
  activePlayer = 0;
  currentScore = 0;
  score.innerHTML = 0;
  score1.innerHTML = 0;
  image.src = '';
  document.getElementById(`current--1`).innerHTML = 0;
  document.getElementById(`current--0`).innerHTML = 0;
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.add('player--active');
}
newGame();
roll.addEventListener('click', current1);
function current1() {
  if (play) {
    let num = Math.floor(Math.random() * 6);

    image.src = `dice-${num + 1}.png`;
    if (num != 0) {
      numero += 1 + num;
      currentScore = numero;
      document.getElementById(`current--${activePlayer}`).innerHTML =
        currentScore;
    } else {
      holdScore();
    }
  }
}

let hold = document
  .querySelector('.btn--hold')
  .addEventListener('click', holding);
function holding() {
  if (play) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).innerHTML =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      play = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    document.getElementById(`current--${activePlayer}`).innerHTML = 0;
    holdScore();
  }
}

function holdScore() {
  document.getElementById(`current--${activePlayer}`).innerHTML = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  numero = 0;
  currentScore.innerHTML = 0;
  document.querySelector(`.player--0`).classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
}

document.querySelector('.btn--new').addEventListener('click', newGame);
