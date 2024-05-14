

let playGame = confirm("Shall we play rock, paper, or scissors?");
if(playGame){
while (playGame) {
    let playerChoice = prompt("Please enter rock, paper,  or scissors.");
       //if playerchoice is not null, hence not an object, hence only string accepted including empty string
    // can also be written as if(playerChoice ===!null)
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerChoice || playerChoice === "") {
            if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
                let computerChoice = Math.floor(Math.random() * 3);
                let rpsArray = ["rock", "paper", "scissors"];
                let computer = rpsArray[computerChoice]

                let result = playerOne === computer ? `Player One: ${playerOne}\nComputer: ${computer}\nThis is a tie`
                    : playerOne === "rock" && computer === "paper"
                        ? `Player One: ${playerOne}\nComputer: ${computer}\ncomputer wins`
                        : playerOne === "paper" && computer === "scissors"
                            ? `Player One: ${playerOne}\nComputer: ${computer}\ncomputer wins`
                            : playerOne === "scissors" && computer === "rock"
                                ? `Player One: ${playerOne}\nComputer: ${computer}\ncomputer wins`
                                : `Player One: ${playerOne}\nComputer: ${computer}\nPlayer wins`;
                alert(result);

                playGame = confirm("Want to play again?");
                if (!playGame)
                    alert("Ok, thanks for playing");
                continue;
            } else {
                alert("You didn't enter rock, paper or scissors");
            }

        } else {
        alert("I guess you changed your mind,  may be next time"); 
        break;
    }
}
}else{
    alert("Okay, may be next time");
}