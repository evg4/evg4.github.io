let square = document.getElementById("square");
let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");
let yellowButton = document.getElementById("yellow");
let mysteryButton = document.getElementById("mystery");
let resetButton = document.getElementById("reset");
let toCircleButton = document.getElementById("toCircle");
let toSquareButton = document.getElementById("toSquare");
let text = document.getElementsByTagName("h3")[0];

function turnRed() {
  square.style.backgroundColor = "red";
  text.innerHTML = "I love red!";
}

function turnBlue() {
  square.style.backgroundColor = "blue";
  text.innerHTML = "Blue like the sea!";
}

function turnYellow() {
  square.style.backgroundColor = "yellow";
  text.innerHTML = "As yellow as the sun!";
}

function getRandNum() {
  let num = Math.floor(Math.random() * 256);
  return num;
}

function getRandText() {
  let num2 = Math.floor(Math.random() * 8);
  switch (num2) {
    case 0:
      text.innerHTML = "What a great colour!";
      break;
    case 1:
      text.innerHTML = "Hmm, not sure about this one...";
      break;
    case 2:
      text.innerHTML = "Can we make it a bit lighter?";
      break;
    case 3:
      text.innerHTML = "The perfect shade!";
      break;
    case 4:
      text.innerHTML = "I think I like it...";
      break;
    case 5:
      text.innerHTML = "Yay, my favourite colour!";
      break;
    case 6:
      text.innerHTML = "My Mum's favourite colour!";
      break;
    case 7:
      text.innerHTML = "I don't like it, try again!";
      break;
    default:
      text.innerHTML = "Go on, pick a colour!";
      break;
  }
}

function mysteryColor() {
  let x = getRandNum();
  let y = getRandNum();
  let z = getRandNum();
  square.style.backgroundColor = "rgb(" + x + ", " + y + ", " + z + ")";
  getRandText();
}

function toCircle() {
  square.style.borderRadius = "50%";
  toCircleButton.style.display = "none";
  toSquareButton.style.display = "inline-block";
}

function toSquare() {
  square.style.borderRadius = "0%";
  toCircleButton.style.display = "inline-block";
  toSquareButton.style.display = "none";
}

function reset() {
  square.style.backgroundColor = "white";
  text.innerHTML = "Click the buttons below to change my colour!";
  square.style.borderRadius = "0%";
  toCircleButton.style.display = "inline-block";
  toSquareButton.style.display = "none";
}

redButton.addEventListener("click", turnRed);
blueButton.addEventListener("click", turnBlue);
yellowButton.addEventListener("click", turnYellow);
mysteryButton.addEventListener("click", mysteryColor);
resetButton.addEventListener("click", reset);
toCircleButton.addEventListener("click", toCircle);
toSquareButton.addEventListener("click", toSquare);
