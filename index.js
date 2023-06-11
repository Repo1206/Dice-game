const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const images1 = "images/dice" + randomNumber1 + ".png";
const images2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", images1);
document.querySelector(".dice .img2").setAttribute("src", images2);

if (randomNumber1 === randomNumber2) {
  document.querySelector(".container h1").textContent = "It's A Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").textContent = "Player 1 Wins!";
} else {
  document.querySelector(".container h1").textContent = "Player 2 Wins!";
}
