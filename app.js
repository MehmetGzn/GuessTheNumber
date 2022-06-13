let secretNumber = Math.floor(Math.random() * 49) + 1;
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

let scoreArray = [];
let scoreCounter = 25;
score.innerHTML = scoreCounter;

// to make the game ready play again

again.addEventListener("click", () => {
  message.innerText = "START GUESSING AGAIN...";
  document.body.style.backgroundColor = "#f5eedc";
  input.style.backgroundColor = "#f5eedc";
  score.innerHTML = 25;
  scoreCounter = 25;
  secretNumber = Math.floor(Math.random() * 49) + 1;
  console.log(secretNumber);
});

check.addEventListener("click", () => {
  if (+input.value > 50) {
    alert("Please Enter a Number Between 1 to 50 !!!");
  } else {
    if (+input.value == secretNumber) {
      document.body.style.backgroundColor = "#FCF9AF";
      input.style.backgroundColor = "#FCF9AF";
      message.innerText = "CONGRATULATIONS YOU FOUND IT";
      message.style.fontSize = "2.8rem";
      secretNumberSpan.innerText = secretNumber;
      // to show there is again button
      again.style.fontSize = "3.3rem";
      setTimeout(() => {
        again.style.fontSize = "2.3rem";
        again.style.transition = ".3s ease-in-out";
      }, 800);
      again.style.fontSize = "3.3rem";
      // to set a high score
      scoreArray.push(+score.innerHTML);
      highestScore.innerText = Math.max(...scoreArray);
    } else if (+input.value > secretNumber) {
      if (scoreCounter > 1) {
        message.innerText = "TOO HIGH...";
        scoreCounter--;
        score.innerHTML = scoreCounter;
        // to show the change of the interval after wrong number
        if (bigerNumber.innerText > input.value) {
          bigerNumber.innerText = input.value;
          interval.style.fontSize = "3rem";
          setTimeout(() => {
            interval.style.fontSize = "2rem";
            interval.style.transition = ".3s ease-in-out";
          }, 500);
          interval.style.fontSize = "3rem";
        }
      } else {
        message.textContent = "YOU LOSE THE GAME !";
        score.innerHTML = 0;
      }
    } else if (+input.value < secretNumber) {
      if (scoreCounter > 1) {
        message.innerText = "TOO LOW...";
        scoreCounter--;
        score.innerHTML = scoreCounter;
        // to show the change of the interval after wrong number
        if (littleNumber.innerText < input.value) {
          littleNumber.innerText = input.value;
          interval.style.fontSize = "3rem";
          setTimeout(() => {
            interval.style.fontSize = "2rem";
            interval.style.transition = ".3s ease-in-out";
          }, 500);
          interval.style.fontSize = "3rem";
        }
      } else {
        message.textContent = "YOU LOSE THE GAME !";
        score.innerHTML = 0;
      }
    }
  }
});
