let myVariable = `<img id="dynamicPicture" src="assets/arrow.png">`;

function myfunction() {
  // document.getElementById("dynamicHeader").innerHTML = "New Color";
  document.getElementById("dynamicHeader").innerHTML = myVariable;
  document.getElementById("dynamicPicture").style.display = "inline";
}
