//Call elements from html!
//Progress bar = the element we want to change.
const progressBar = document.querySelector("#progress-bar");
//Section = the element progress bar depends on.
const section = document.querySelector("section");

//make a function to animate progress bar!
const animateProgressBar = () => {
  let scrollDistance = section.getBoundingClientRect();
  console.log(scrollDistance);
}

animateProgressBar();
