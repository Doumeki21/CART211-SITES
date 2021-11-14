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
  blur.classList.toggle("active")
}

// //Smooth scroll with anchor tag
// function smoothScroll(target, duration) {
//   var target = document.querySelector(target);
//   var targetPosition = target.getBoundingClientRect().top;
//   var startPosition = window.pageYOffset;
//
// console.log(startPosition);
// }
