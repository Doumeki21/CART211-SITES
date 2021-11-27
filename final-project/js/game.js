//OOP
class AudioController {
  constructor() {
    // this.bgMusic = new Audio();
    // this.bgMusic.volume = 0.5;
    // this.bgMusic.loop = true;
    this.flipSound = new Audio(`assets/sounds/flip.wav`);
    this.matchSound = new Audio(`assets/sounds/match.wav`);
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
  }

  flipCard(card) {
    if (this.canFlipCard(card)) {
      this.audioController.flip();
      this.totalClicks++;
      this.ticker.innerText = this.totalClicks;
    }
  }
  canFlipCard(card) {
    //cannot flip card when matched!
    return true;
    //if all these statements are false, retun true.
    // return !this.busy && !this.matchedCards.includes(card) && card !===this.cardToCheck;
  }
}

function ready() {
  //call all the overlays
  let overlays = Array.from(document.getElementsByClassName(`overlay-text`));
  //call all cards
  let cards = Array.from(document.getElementsByClassName(`card`));
  // 100 sec
  let game = new MixOrMatch(100, cards);

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
