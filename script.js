let winsAgainstMap = new Map();
winsAgainstMap.set("rock", "scissors");
winsAgainstMap.set("paper", "rock");
winsAgainstMap.set("scissors", "paper");

let timesPlayed = 0;
let victories = 0, losses = 0;
const WINS_NEEDED = 5;

buttons = document.querySelectorAll(".buttons button");

console.log(buttons);

buttons.forEach(e => e.addEventListener('click', (e) => play(e.target.getAttribute('class'))));

function play(playerSelection) {

    if (victories >= WINS_NEEDED || losses >= WINS_NEEDED) 
        return;

    let computerSelection = computerPlay();
    let trueIfWon = [null];
    
    resultNode = document.querySelector('.output');
    resultNode.style.whiteSpace = "pre";
    resultNode.textContent = playRound(playerSelection, computerSelection, trueIfWon);

    victories += trueIfWon[0] ? 1 : 0;
    losses += trueIfWon[0] == false ? 1 : 0;

    if (victories == WINS_NEEDED || losses == WINS_NEEDED)
        resultNode.textContent += `\n Game ended. You won ${victories} and lost ${losses}`;
        

    timesPlayed++;

}

function playRound(playerSelection, computerSelection, trueIfWon) {

    if (winsAgainstMap.get(playerSelection) === computerSelection) {
        trueIfWon[0] = true;
        return "You won! " + playerSelection + " beats " + computerSelection + ".";
    }
        

    else if (winsAgainstMap.get(computerSelection) === playerSelection) {
        trueIfWon[0] = false;
        return "You lost! " + computerSelection + " beats " + playerSelection + ".";
    }
        
    
    else {
        trueIfWon = [null];
        return "Draw!";
    }
        
  }
  
  

  function computerPlay() {
      let choice = Math.floor(Math.random()*100) % 3;

      switch(choice) {
          case 0: return "rock";
          case 1: return "paper";
          case 2: return "scissors";
      }
  }