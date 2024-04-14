let weapons;

//function that randomly choses from Rock, Paper or Scissor and returns them as a string
function getComputerChoice() {
//Math.random code to get an random integer between a maximum value and minimum value Math.floor(Math.random()*(maximum - minimum + 1) + minimum)
   let choiceNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
   console.log(choiceNumber);
   if (choiceNumber === 3) {
     return "Rock";
   } else if (choiceNumber === 2) {
     return "Paper";
   } else {
     return "Scissor";
   }
}

