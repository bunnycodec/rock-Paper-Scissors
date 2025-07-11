let username = prompt("Enter your username please: (less than 6 character)");
if (username === null) {
  location.reload();
} else {
  username = username.substring(0, 6);
  document.querySelector("#username").innerText = username;
}

username = username.substring(0, 6);
document.querySelector("#username").innerText = username;

let user = 0;
let comp = 0;
let message = document.querySelector("#msg");

let compChoices = ["rock", "paper", "scissors"];

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let uChoice = choice.getAttribute("id");
    let cChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    console.log(`User choice = ${uChoice} ---- Comp choice = ${cChoice}`);

    if (uChoice === "rock") {
      if (cChoice === "rock") itsDraw("Rock");
      else if (cChoice === "scissors") youWin("Rock", "Scissors");
      else compWin("Paper", "Rock");
    }

    if (uChoice === "paper") {
      if (cChoice === "paper") itsDraw("Paper");
      else if (cChoice === "rock") youWin("Paper", "Rock");
      else compWin("Scissors", "Paper");
    }

    if (uChoice === "scissors") {
      if (cChoice === "scissors") itsDraw("Scissors");
      else if (cChoice === "paper") youWin("Scissors", "Paper");
      else compWin("Rock", "Scissors");
    }
  });
});

const youWin = (win, lost) => {
  message.innerText = `${username} Won! ${win} beats ${lost}!`;
  message.style.backgroundColor = "green";
  user++;
  document.querySelector("#user-score").innerText = user;
};

const compWin = (win, lost) => {
  message.innerText = `Machine Won! ${win} beats ${lost}!`;
  message.style.backgroundColor = "red";
  comp++;
  document.querySelector("#comp-score").innerText = comp;
};

const itsDraw = (val) => {
  message.innerText = `Both ${val} ... It's a Draw!`;
  message.style.backgroundColor = "#081b31";
};
