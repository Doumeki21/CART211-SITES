window.onload = function() {
  //Loader screen
  console.log("running");
  setTimeout(loadIndex, 5000);

  let text = ['W', 'e', 'l', 'c', 'o', 'm', 'e'];
  let currentIndex = 0;
  let typeWritten = "";
  let typeAnimation = setInterval(typeWelcome, 500);

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

  //CURSOR
  //2: put on the parent;
  document.getElementById("parent").addEventListener("mousemove", mouseCapture);

  function mouseCapture() {

    ///1:
    // Can only work when circle is absolute!
    // document.getElementById("moveMe").style.left = event.clientX+"px";
    // document.getElementById("moveMe").style.top = event.clientY+"px";

    //2:: put in center
    let mBox = document.getElementById("moveMe").getBoundingClientRect();
    // console.log(mBox);

    // //3:: need the parent offset::
    //     //NOTE that mouseEVent coordinates are ALWAYS relative to the window ...
    //getBoundingClientRect becomes parent here!
    let pBox = this.getBoundingClientRect();
    //Here we calculate the offset depending where the parent is!!
    let mouse_offset_x = event.clientX - pBox.x;
    let mouse_offset_y = event.clientY - pBox.y;

    document.getElementById("moveMe").style.left = (mouse_offset_x - mBox.width / 2) + "px";
    document.getElementById("moveMe").style.top = (mouse_offset_y - mBox.height / 2) + "px";
  }
}
