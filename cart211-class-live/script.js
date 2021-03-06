const soundFile = new Audio("assets/sound.wav");
let lastTitle = "Variable Title";
let lastImage = "assets/camerons-world.png";
let imageHorizontal = 0;
let imageVertical = 0;

let dragHorizontal = 0;
let dragVertical = 0;
let dragOffsetH = 0;
let dragOffsetV = 0;
let dragging = false;


  dragHorizontal = window.localStorage.getItem("dragHorizontal");
  dragVertical = window.localStorage.getItem("dragVertical");

function onLoad() {
  document.getElementById("dragImage").style.left = dragHorizontal - 100 + "px";
  document.getElementById("dragImage").style.top = dragVertical - 50 + "px";
}


//Function called every 20 millis.
// setInterval(movePicture, 60);

//event are all identified by browser!!
//call our keyboard function.
document.addEventListener("keydown", keyboard);

function mouseMove() {
  if (dragging) {
    dragHorizontal = event.pageX;
    dragVertical = event.pageY;


    document.getElementById("dragImage").style.left = dragHorizontal - 100 + "px";
    document.getElementById("dragImage").style.top = dragVertical - 50 + "px";
  }
}

function mouseDown() {
  dragOffsetH = event.pageX -parseInt(document.getElementById("dragImage").style.left, 10);
    dragOffsetV = event.pageY - document.getElementById("dragImage").style.top;
  dragging = true;
}

function mouseUp() {
  dragging = false;

//take variable into the local storage.
  window.localStorage.setItem("dragHorizontal", dragHorizontal);
  window.localStorage.setItem("dragVertical", dragVertical);
}

function myfunction() {
  // document.getElementById("dynamicHeader").innerHTML = "New Color";
  soundFile.play();

  //swapImage is the action.
  //DyanmicPicture = old image, lastImage = new image
  let swapImage = lastImage;
  lastImage = document.getElementById("dynamicPicture").src;
  document.getElementById("dynamicPicture").src = swapImage;

  // document.getElementById("dynamicPicture").style.display = "inline";
  document.getElementById("dynamicHeader").style.backgroundColor = "#57FFFF";

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
    //Offset = left
    document.getElementById("dynamicPicture").style.left = imageHorizontal + "px";
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
    let array = document.getElementsByClassName("special-para");

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
