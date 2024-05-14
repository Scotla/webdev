
let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    let playerChoice = prompt("Please enter rock, paper,  or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
                : computerChoice === 2 ?
                    "paper"
                    : "scissors";

            let result = playerOne === computer ? `Player One: ${playerOne}\nComputer: ${computer}\nThis is a tie`
                : playerOne === "rock" && computer === "paper"
                    ? `Player One: ${playerOne}\nComputer: ${computer}\ncomputer wins`
                    : playerOne === "paper" && computer === "scissors"
                        ? `Player One: ${playerOne}\nComputer: ${computer}\ncomputer wins`
                        : playerOne === "scissors" && computer === "rock"
                            ? `Player One: ${playerOne}\nComputer: ${computer}\ncomputer wins`
                            : `Player One: ${playerOne}\nComputer: ${computer}\nPlayer wins`;
            alert(result);

            let playAgain = confirm("Want to play again?");
            playAgain ? location.reload() : alert("Okay, thanks for trying")
        } else {
            alert("You didn't enter rock, paper or scissors");
        }
    } else {
        alert("I guess you changed your mind,  may be next time");
    }
} else {
    alert("Okay, may be next time");
}