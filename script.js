function startGame() {
  let playerScore = 0;
  let computerScore = 0;

  function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    let resultText = `You choose ${playerSelection}, and computer chose ${computerSelection}. `;

    if (playerSelection === computerSelection.toLowerCase()) {
      resultText += "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
      (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
      (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
      resultText += "You win!";
      playerScore++;
    } else {
      resultText += "You lose!";
      computerScore++;
    }

    resultText += ` Score: You: ${playerScore} Computer: ${computerScore}`;

    console.log(resultText);
  }

  function game() {
    playerScore = 0;
    computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
      const playerSelection = prompt("Enter rock, paper, or scissors:");
      const computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
    }

    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("The game is a tie!");
    }

    const playAgain = prompt("Do you want to play again? (yes or no)");
    if (playAgain.toLowerCase() === "yes") {
      game();
    }
  }

  game();
}

startGame();
