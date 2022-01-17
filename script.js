let map = new Map();
map.set("rock", "scissors");
map.set("paper", "rock");
map.set("scissors", "paper");

play();

function play() {
    let playerSelection;
    let computerSelection;

    for (let i=0 ; i<5 ; i++) {
        playerSelection = prompt("Enter your selection");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (map.get(playerSelection) === computerSelection)
        return "You won! " + playerSelection + " beats " + computerSelection;
    else if (map.get(computerSelection) === playerSelection)
        return "You lost! " + computerSelection + " beats " + playerSelection;
    
        else return "Draw!";
  }
  
  

  function computerPlay() {
      let choice = Math.floor(Math.random()*100) % 3;

      switch(choice) {
          case 0: return "rock";
          case 1: return "paper";
          case 2: return "scissors";
      }
  }