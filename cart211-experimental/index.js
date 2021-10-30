window.onload = function() {
  //Loader screen
  console.log("running");
  setTimeout(loadIndex, 5000);

  let text = ['W','e','l','c','o','m','e'];
  let currentIndex =0;
  let typeWritten ="";
  let typeAnimation = setInterval(typeWelcome,500);

  function loadIndex() {
    document.getElementById("loader-wrapper").style.display = "none";
    document.getElementById("index-wrapper").style.display = "block";
  }

  function typeWelcome(){
    typeWritten+=text[currentIndex];
    console.log(typeWritten);
    document.getElementById("welcome-text").textContent = typeWritten;
    currentIndex++;
    if(currentIndex>=text.length){
      clearInterval(typeAnimation);
    }
  }
}
