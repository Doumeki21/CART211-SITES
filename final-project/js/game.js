

function ready() {
  //call all the overlays
  let overlays = Array.from(document.getElementsByClassName(`overlay-text`));
  //call all cards
  let cards = Array.from(document.getElementsByClassName(`card`));

//forEach() is used with Arrays
//foreach = takes a function to call for every item in the Array
  overlays.forEach(overlay => {
    overlay.addEventListener(`click`, () => {
      overlay.classList.remove(`visible`);

      //game.startGame();
    });
  });
  cards.forEach(card => {
    //foreach card, addEventListener to the type `click`
    card.addEventListener(`click`, () => {
      //game.flipCard(card);
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
