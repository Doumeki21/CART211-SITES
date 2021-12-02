//OOP
class AudioController {
  constructor() {
    // this.bgMusic = new Audio();
    // this.bgMusic.volume = 0.5;
    // this.bgMusic.loop = true;
    this.flipSound = new Audio(`assets/sounds/flip.wav`);
    this.matchSound = new Audio(`assets/sounds/match.wav`);
    this.flipSound.volume = 0.5;
  }
  flip() {
    this.flipSound.play();
  }
  match() {
    this.matchSound.play();
  }
}

class MixOrMatch {
  constructor(totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime; //startGame
    //referring to Time and Flips under the game title.
    this.timer = document.getElementById(`time-remaining`);
    this.ticker = document.getElementById(`flips`);
    this.audioController = new AudioController();
  }
  //every time we call startGame, all elements resets!
  startGame() {
    this.cardToCheck = null;
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.matchedCards = [];
    this.busy = true;

    //waits 500ms before doing wats inside the function
    //the setTimeout goes smoother with the states (startGame, gameover).
    setTimeout(() => {
      this.shuffleCards();
      this.countDown = this.startCountDown();
      this.busy = false;
    }, 500);
    this.hideCards();
    //Restart the timer and flips
    this.timer.innerText = this.timeRemaining;
    this.ticker.innerText = this.totalClicks;
  }
  hideCards() {
    this.cardsArray.forEach(card => {
      card.classList.remove(`visible`);
      card.classList.remove(`matched`);
    });
  }
  flipCard(card) {
    if (this.canFlipCard(card)) {
      this.audioController.flip();
      this.totalClicks++;
      this.ticker.innerText = this.totalClicks;
      //card flips
      card.classList.add(`visible`);

      if (this.cardToCheck)
        //check for match
        this.checkForCardMatch(card);
      else
        this.cardToCheck = card;
    }
  }
  checkForCardMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck))
      this.cardMatch(card, this.cardToCheck);
    //match
    else
      this.cardMisMatch(card, this.cardToCheck);

    this.cardToCheck = null;
  }
  cardMatch(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    card1.classList.add(`matched`);
    card2.classList.add(`matched`);
    this.audioController.match();
    if (this.matchedCards.length === this.cardsArray.length)
      this.victory();
  }
  cardMisMatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      card1.classList.remove(`visible`);
      card2.classList.remove(`visible`);
      this.busy = false;
    }, 1000);
  }
  getCardType(card) {
    return card.getElementsByClassName(`card-value`)[0].src;
  }

  startCountDown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if (this.timeRemaining === 0)
        this.gameOver();
    }, 1000);
  }
  gameOver() {
    //clears countDown.
    clearInterval(this.countDown);
    // this.audioController.gameOver();
    //shows gameOver screen.
    document.getElementById(`game-over-text`).classList.add(`visible`);
  }
  victory() {
    clearInterval(this.countDown);
    document.getElementById(`victory-text`).classList.add(`visible`);
  }

  //CREATING A SHUFFLE ALGORITHM USING VANILLA JS!!
  shuffleCards() {
    //create a backwards for loop
    for (let i = this.cardsArray.length - 1; i > 0; i--) {
      //Math.random creates a number b/w 0 and 1 (not including 1)
      let randIndex = Math.floor(Math.random() * (i + 1));
      //we shuffle based on the css grid, order property. rather than the array.
      this.cardsArray[randIndex].style.order = i;
      this.cardsArray[i].style.order = randIndex;
    }
  }

  canFlipCard(card) {
    //cannot flip card when matched!
    //if all these statements are false, retun true.
    return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
  }
}

function ready() {
  //call all the overlays
  let overlays = Array.from(document.getElementsByClassName(`overlay-text`));
  //call all cards
  let cards = Array.from(document.getElementsByClassName(`card`));
  // 100 sec
  let game = new MixOrMatch(50, cards);

  //forEach() is used with Arrays
  //foreach = takes a function to call for every item in the Array
  overlays.forEach(overlay => {
    overlay.addEventListener(`click`, () => {
      overlay.classList.remove(`visible`);
      //startGame whenever click on overlay
      game.startGame();
    });
  });
  cards.forEach(card => {
    //foreach card, addEventListener to the type `click`
    card.addEventListener(`click`, () => {
      game.flipCard(card);
    });
  });
}

if (document.readyState === `loading`) {
  //if everything hasn't loaded yet, call the event listerner on the DOM, and when it's loaded, call ready()
  document.addEventListener(`DOMContentLoaded`, ready());
} else {
  //once everything is loaded (aka domcontent), it will call the ready()
  ready();
}

//new MixOrMatch(100, cards)
