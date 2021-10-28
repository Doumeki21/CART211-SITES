const soundFile = new Audio("assets/sound.wav");
let lastTitle = "Variable Title";
let lastImage = "assets/camerons-world.png";
let imagePosition = 0;

//Function called every 20 millis.
setInterval(movePicture, 20);

function myfunction() {
  // document.getElementById("dynamicHeader").innerHTML = "New Color";
  soundFile.play();

  //swapImage is the action.
  //DyanmicPicture = old image, lastImage = new image
  let swapImage = lastImage;
  lastImage = document.getElementById("dynamicPicture").src;
  document.getElementById("dynamicPicture").src = swapImage;

  // document.getElementById("dynamicPicture").style.display = "inline";
  document.getElementById("dynamicHeader").style.backgroundColor = "blue";

  let swapTitle = lastTitle;
  lastTitle = document.getElementById("dynamicHeader").innerHTML;
  document.getElementById("dynamicHeader").innerHTML = swapTitle;
}

function movePicture() {
  if (imagePosition === 300) {
    clearInterval(movePicture);
  } else {
    //imagePosition = imagePosition + 1;
    imagePosition = imagePosition + 3;
    document.getElementById("dynamicPicture").style.right = imagePosition + "px";
  }
}







// let lastTitle = "Variable title";
// let lastImage = "assets/camerons-world.png";
//
// function myfunction() {
//   let swapImage = lastImage;
//   lastImage = document.getElementById("dynamicPicture").src;
//   document.getElementById("dynamicPicture").src = swapImage;
//
//   document.getElementById("dynamicPicture").style.display = "block";
//   document.getElementById("dynamicHeader").style.fontsize = 3em;
//
//   let swapTitle = lastTitle;
//   lastTitle = document.getElementById(:dynamicHeader).innerHTML:
//   document.getElementById("dynamicHeader").innerHTML = myVariable;

}
