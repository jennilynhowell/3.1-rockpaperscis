let playerChoice = prompt("Choose Rock, Paper, or Scissors");
playerChoice = playerChoice.toUpperCase();
let rock = "ROCK";
let paper = "PAPER";
let scissors = "SCISSORS";


// -------------------Hard-code computer choice:
// let computerChoice = rock;
// if (playerChoice === computerChoice) {
//   alert("Tie!");
// } else if (playerChoice === paper) {
//   alert("You win!");
// } else {
//   alert("Computer wins!")
// }


// -------------------Random computer choice:
let computerChoice = (Math.floor(Math.random() * 3) + 1);
// <1 = rock; <2 = paper <3 = scissors
if (computerChoice === 1) {
  computerChoice = rock;
  console.log("Computer chooses: " + computerChoice);
} else if (computerChoice === 2) {
  computerChoice = paper;
  console.log("Computer chooses: " + computerChoice);
} else {
  computerChoice = scissors;
  console.log("Computer chooses: " + computerChoice);
}

if (playerChoice === computerChoice) {
  alert("Tie!");
} else if (playerChoice === paper && computerChoice === rock) {
  alert("You win!");
} else if (playerChoice === scissors && computerChoice === paper) {
  alert("You win!");
} else if (playerChoice === rock && computerChoice === scissors) {
  alert("You win!");
} else if (playerChoice === rock && computerChoice === paper) {
  alert("Computer wins!");
} else if (playerChoice === paper && computerChoice === scissors) {
  alert("Computer wins!");
} else {
  alert("Computer wins!");
}


// -------------------Computer always wins:
// if (playerChoice === rock) {
//   computerChoice = paper;
// } else if (playerChoice === paper) {
//   computerChoice = scissors;
// } else {
//   computerChoice = rock;
// }
//
// if (playerChoice === computerChoice) {
//   console.log("Computer chooses: " + computerChoice);
//   alert("Tie!");
// } else if (playerChoice === paper && computerChoice === rock) {
//   console.log("Computer chooses: " + computerChoice);
//   alert("You win!");
// } else if (playerChoice === scissors && computerChoice === paper) {
//   console.log("Computer chooses: " + computerChoice);
//   alert("You win!");
// } else if (playerChoice === rock && computerChoice === scissors) {
//   console.log("Computer chooses: " + computerChoice);
//   alert("You win!");
// } else if (playerChoice === rock && computerChoice === paper) {
//   console.log("Computer chooses: " + computerChoice);
//   alert("Computer wins!");
// } else if (playerChoice === paper && computerChoice === scissors) {
//   console.log("Computer chooses: " + computerChoice);
//   alert("Computer wins!");
// } else {
//   alert("Computer wins!");
// }
