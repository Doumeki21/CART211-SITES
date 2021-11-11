const soundFile = new Audio("assets/sound.wav");
let lastTitle = "Yay";
let lastImage = "assets/camerons-world.png";
// let imagePosition = 0;
let imageHorizontal = 0;
let imageVertical = 0;

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
  if (imageHorizontal === 300) {
    clearInterval(movePicture);
  } else {
    //imagePosition = imagePosition + 1;
    imageHorizontal = imageHorizontal + 3;
    document.getElementById("dynamicPicture").style.right = imageHorizontal + "px";
  }
}

function keyboard(event) {
  console.log(imageHorizontal);

  if (event.keyCode === 38) {
    imageVertical -= 3;
  } else if (event.keyCode === 40) {
    imageVertical += 3;
  } //left key
  else if (event.keyCode === 37 && imageHorizontal <= 300) {
    imageHorizontal -= 3;
  } //Right key
  else if (event.keyCode === 39) {
    imageHorizontal += 3;
  }
  //When A is pressed-
  else if (event.keyCode === 65) {
    //This gives an array of however much of elements we have in the class.
    let array = document.getElementsByClassName("special-style");

    for (let i = 0; i < array.length; i++) {
      //The first thing in the class should turn this color.
      array[i].style.color = "#FF55FF";
    }
  }
  if (imageHorizontal <= -100) {
    window.alert("you did it!");
  }
  document.getElementById("dynamicPicture").style.left = imageHorizontal + "px";
    document.getElementById("dynamicPicture").style.top = imageVertical + "px";
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

// }
