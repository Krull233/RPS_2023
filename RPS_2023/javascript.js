let playerWeapon = prompt("Choose your weapon!".toLowerCase());
let playerScore = 0;
let compScore = 0;
let round = 0;

///////////////////////////////////////////////////////////////////////////////////////////////////
// DONE

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// console.log(getComputerChoice());

///////////////////////////////////////////////////////////////////////////////////////////////////
// DONE

function oneRound(playerSelection, computerSelection) {
  console.log("Player Chose : " + playerSelection);
  console.log("Computer Chose : " + computerSelection);

  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
  } else if (playerSelection == computerSelection) {
    ("It's a tie!");
  } else {
    compScore++;
  }
}

// console.log(oneRound(playerWeapon, getComputerChoice()));

///////////////////////////////////////////////////////////////////////////////////////////////////
// DONE

function game() {
  oneRound(playerWeapon, getComputerChoice());
  oneRound(playerWeapon, getComputerChoice());
  oneRound(playerWeapon, getComputerChoice());
  oneRound(playerWeapon, getComputerChoice());
  oneRound(playerWeapon, getComputerChoice());

  if (playerScore > compScore) {
    console.log("Final result: Player wins with score of " + playerScore);
  } else if (compScore > playerScore) {
    console.log("Final result: Computer wins with score of " + compScore);
  } else {
    console.log("Final result: No winner");
  }
}

console.log(game());
