window.onload = function() {
  //Loader screen
  console.log("running");
  setTimeout(loadIndex, 3000);

  let text = ['W', 'e', 'l', 'c', 'o', 'm', 'e', '!'];
  let currentIndex = 0;
  let typeWritten = "";
  let typeAnimation = setInterval(typeWelcome, 200);

  function loadIndex() {
    document.getElementById("loader-wrapper").style.display = "none";
    document.getElementById("index-wrapper").style.display = "block";
  }

  function typeWelcome() {
    typeWritten += text[currentIndex];
    console.log(typeWritten);
    document.getElementById("welcome-text").textContent = typeWritten;
    currentIndex++;
    if (currentIndex >= text.length) {
      clearInterval(typeAnimation);
    }
  }
}

function toggle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

//SR-> this function will return a LIST -> not a single item  (even if there is only 1)
let fortuneElements = document.getElementsByClassName("fortune");

let fortunes = [
  `Strawberry Shortcake`,
  `Chocolate Ice Cream`,
  `Pudding`,
];
//SR->need to go through ALL
for (let i = 0; i < fortuneElements.length; i++) {

  fortuneElements[i].addEventListener(`click`, function() {
    toggle();
    let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    console.log(randomFortune);
    //popup.classList.add("active");
    let popupText = popup.children[1];
    popupText.innerHTML = randomFortune;

    //SR first child of popup is the close "x" element
    let closeButton = popup.children[0];

    //code for close button
    closeButton.addEventListener(`click`, function() {

      popup.classList.remove("active");
      popupText.innerHTML = "";
    })
  })
}

 // SR >>>ADD LOAD DOWN HERE

// //Smooth scroll with anchor tag
// function smoothScroll(target, duration) {
//   var target = document.querySelector(target);
//   var targetPosition = target.getBoundingClientRect().top;
//   var startPosition = window.pageYOffset;
//
// console.log(startPosition);
// }

// //Smooth scroll with anchor tag
// function smoothScroll(target, duration) {
//   var target = document.querySelector(target);
//   var targetPosition = target.getBoundingClientRect().top;
//   var startPosition = window.pageYOffset;
//
// console.log(startPosition);
// }
