// create a variable that will access the drum buttons
const drumDiv = document.querySelector(".drum-button");
// This fumction with play the audio when each button is clicked
function playSound(button) {
  switch (button) {
    case "q":
      let crash1 = new Audio("./sounds/crash1.mp3");
      crash1.play();
      break;
    case "w":
      let crash2 = new Audio("./sounds/crash2.mp3");
      crash2.play();
      break;
    case "e":
      let crash3 = new Audio("./sounds/crash3.mp3");
      crash3.play();
      break;
    case "r":
      let crash4 = new Audio("./sounds/crash4.mp3");
      crash4.play();
      break;
    case "t":
      let crash5 = new Audio("./sounds/crash5.mp3");
      crash5.play();
      break;
    case "y":
      let crash6 = new Audio("./sounds/crash6.mp3");
      crash6.play();
      break;
    case "u":
      let crash7 = new Audio("./sounds/crash7.mp3");
      crash7.play();
      break;
// This will play the default sound when the incorrect keys are clicked
    default:
      let crash8 = new Audio("./sounds/crash8.mp3")
      crash8.play();
      break;
  }
}
// This will add an event listener to the buttons so as to fire the sound when clicked
drumDiv.addEventListener("click", (event) => playSound(event.target.id));
// This will add an event listener to the keyboard, so that when the corresponding key is pressed, the sound will play
document.addEventListener("keypress", (event) => playSound(event.key));
