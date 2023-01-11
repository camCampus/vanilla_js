// you can write js here
let playerInput = prompt("rock, paper, scissors");

let choice = ["rock", "paper", "scissors", "bomb"];
//let playerInput = choice[Math.floor(Math.random() * 3)];

function getPlayerChoice(userInput) {
  let u = userInput.toLowerCase();

  for (i = 0; i < choice.length; i++) {
    if (u === choice[i]) {
      return u;
    }
  }
  return console.log("error");
}

function getComputerChoice() {
  let r = Math.floor(Math.random() * 3);
  return choice[r];
}

function findWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return console.log("Egalité");
  }
  console.log("You play: " + playerChoice);
  console.log("computer play: " + computerChoice);
  let a;
  if (playerChoice === "bomb") {
    return console.log("WIN cheater =)");
  }

  if (playerChoice === "rock") {
    switch (computerChoice) {
      case "paper":
        a = "Lost";
        break;
      case "scissors":
        a = "Win";
        break;
    }
  }
  if (playerChoice === "paper") {
    switch (computerChoice) {
      case "scissors":
        a = "Lost";
        break;
      case "rock":
        a = "Win";
        break;
    }
  }
  if (playerChoice === "scissors") {
    switch (computerChoice) {
      case "paper":
        a = "Lost";
        break;
      case "rock":
        a = "Win";
        break;
    }
  }
  return console.log(a);
}

function playGame() {
  let user = getPlayerChoice(playerInput);
  let computer = getComputerChoice();

  findWinner(user, computer);
}

playGame();
