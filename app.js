const secretNumber = Math.floor(Math.random() * 49) + 1;
console.log(secretNumber);

const secretNumberSpan = document.getElementById("secretNumberSpan");
const interval = document.getElementById("interval");
const check = document.getElementsByClassName("checkButton")[0];
const again = document.getElementsByClassName("againButton")[0];
const score = document.getElementsByClassName("score")[0];
const highestScore = document.getElementsByClassName("highestScore")[0];
const input = document.getElementById("guessNumber");
const message = document.getElementById("message");
const littleNumber = document.getElementById("littleNumber");
const bigerNumber = document.getElementById("bigerNumber");
secretNumberSpan.innerText = secretNumber;

let scoreCounter = 50;
score.innerHTML = scoreCounter;

check.addEventListener("click", () => {
  if (+input.value == secretNumber) {
    document.body.style.backgroundColor = "#FCF9AF";
    input.style.backgroundColor = "#FCF9AF";
    message.innerText = "CONGRATULATIONS YOU FOUND IT";
    message.style.fontSize = "2.8rem";
    secretNumberSpan.innerText = secretNumber;
  } else if (+input.value > secretNumber) {
    message.innerText = "TOO HIGH...";
    scoreCounter--;
    score.innerHTML = scoreCounter;
    if (bigerNumber.innerText > input.value) {
      bigerNumber.innerText = input.value;
      interval.style.fontSize = "3rem";
      setTimeout(() => {
        interval.style.fontSize = "2rem";
        interval.style.transition = ".3s ease-in-out";
      }, 500);
      interval.style.fontSize = "3rem";
    }
  } else if (+input.value < secretNumber) {
    message.innerText = "TOO LOW...";
    scoreCounter--;
    score.innerHTML = scoreCounter;
    if (littleNumber.innerText < input.value) {
      littleNumber.innerText = input.value;
      interval.style.fontSize = "3rem";
      setTimeout(() => {
        interval.style.fontSize = "2rem";
        interval.style.transition = ".3s ease-in-out";
      }, 500);
      interval.style.fontSize = "3rem";
    }
  }
});

// document.body.style.backgroundColor = "#000"
