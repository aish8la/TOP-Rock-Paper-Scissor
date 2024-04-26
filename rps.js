let lastWin = "";
let lastLoss = "";
let playerWins = 0;
let computerWins = 0;
let playerLoss = 0;
let computerLoss = 0;
let ties = 0;
let numberOfGames = 0;
let currentStatus = "";
let messageBox = document.querySelector('.message-box');
let weaponButton = document.querySelector('.buttons-card');
let finalMessage = document.querySelector('.final-results');
let results = document.querySelector('.rounds');
messageBox.textContent = 'Choose your weapon'

//function that randomly choses from Rock, Paper or Scissor and returns them as a string
function getComputerChoice() {
//Math.random code to get an random integer between a maximum value and minimum value Math.floor(Math.random()*(maximum - minimum + 1) + minimum)
   const choiceNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
   if (choiceNumber === 3) {
     return "Rock";
   } else if (choiceNumber === 2) {
     return "Paper";
   } else {
     return "Scissors";
   }
}

// function for updating wins and loss
const roundStatus = (status) => {
  if (status === "playerWin") {
    lastWin = "Player";
    lastLoss ="Computer";
    computerLoss++;
    playerWins++;
  } else if (status === "playerLose") {
    lastWin = "Computer";
    lastLoss ="Player";
    playerLoss++;
    computerWins++;
  }
}

// function to play game by taking two parameters
function playRound(playerSelection, computerSelection) {
    const playerChoiceLowerCase = playerSelection.toLowerCase();
    const computerChoiceLowerCase = computerSelection.toLowerCase();
// generate proper case of player selection
    const playerChoiceProperCase = playerChoiceLowerCase.slice(0,1).toUpperCase() + playerChoiceLowerCase.slice(1);
// winning and losing message
    const winningMessage = `You win!! ${playerChoiceProperCase} beats ${computerSelection}.`;
    const losingMessage = `You lose!! ${computerSelection} beats ${playerChoiceProperCase}.`;

 
// switch statement checks if the player choice is a valid choice and proceed with game if it is else returns a string saying that the choice is invalid
    switch (playerChoiceLowerCase) {
      case "rock":
      case "paper":
      case "scissors":
// checks if player choice and computer choice is same or not before proceeding
        if (playerChoiceLowerCase === computerChoiceLowerCase) {
          ties++;
          return "It's a tie!";
        } else if (playerChoiceLowerCase === "rock") {
          if (computerChoiceLowerCase === "scissors") {
            roundStatus("playerWin");
            return winningMessage;
          } else {
            roundStatus("playerLose");
            return losingMessage;
          }  
        } else if (playerChoiceLowerCase === "paper") {
          if (computerChoiceLowerCase === "rock") {
            roundStatus("playerWin");
            return winningMessage;
          } else {
            roundStatus("playerLose");
            return losingMessage;
          }
        } else if (computerChoiceLowerCase === "paper") {
            roundStatus("playerWin");
            return winningMessage;
          } else {
            roundStatus("playerLose");
            return losingMessage;
          }
      default:
        return "Wrong weapon";
    }
}

//funtion to record the current game status out of all the rounds
function currentGameStatus() {
  switch (true) {
    case (playerWins > computerWins):
      currentStatus = `Player Wins with ${playerWins} Wins, ${playerLoss} Loss and ${ties} Ties in a total of ${numberOfGames} rounds.`;
      break;
    case (playerWins < computerWins):
      currentStatus = `Computer Wins with ${computerWins} Wins, ${computerLoss} Loss and ${ties} Ties in a total of ${numberOfGames} rounds.`;
      break;
    case (playerWins === computerWins):
      currentStatus = `Player is tied with the computer with ${playerWins} Wins, ${playerLoss} Loss and ${ties} Ties out of ${numberOfGames} Rounds.`;
      break;
    default:
      currentStatus = "";
  }
}



weaponButton.addEventListener('click', (event)=> {
  let target = event.target;

  if ((target.id === 'rock'
  || target.id === 'paper'
  || target.id === 'scissors')
  && numberOfGames < 5) {
    let roundResult = playRound(target.id, getComputerChoice());
    messageBox.textContent = roundResult;
    numberOfGames++;  
  } else if (numberOfGames >=5) {
    messageBox.textContent = 'Reset the page to restart the game';
    currentGameStatus();
    finalMessage.textContent = currentStatus;
  }
});

