

const  initGame = () =>{ 
    const startGame = confirm("Shall we play rock, paper, or scissors?");
    startGame?playGame():alert("Ok, may be later");
}
const playGame = ()=>{
    //while(true) executes until the break keyword is applied.
    while(true){
        let playerChoice =getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice===""){
            invalidChoice();
            continue;
        }
        if(!playerChoice){
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if(!playerChoice){
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if(askToPlayAgain()){
            continue;
        }else{
            thanksForPlaying();
            break;
        }
    }

};
const getPlayerChoice = () =>{
    return prompt("Please enter rock paper or scissors");
}
const formatPlayerChoice = (playerChoice) =>{
    if(playerChoice || playerChoice===""){
        return playerChoice.trim().toLowerCase();
    }else{
        return false;
    }
}
const decidedNotToPlay = ()=>{
    alert("I guess you changed your mind, may be next time");
}
const evaluatePlayerChoice = (playerChoice)=>{
    if (playerChoice === "rock" || 
    playerChoice === "paper" || 
    playerChoice === "scissors"){
        return playerChoice;
    }else{
        return false;
    }
}
const invalidChoice = () => {
    alert("You did not enter rock, paper or scissors");
}
const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random()*3);
    const rpsArray = ["rock", "paper","scissors"];

    return rpsArray[randomNumber];
}
const determineWinner = (player, computer)=>{
    let winner = player === computer ? `Player One: ${player}\nComputer: ${computer}\nThis is a tie`
                    : player === "rock" && computer === "paper"
                        ? `Player One: ${player}\nComputer: ${computer}\ncomputer wins`
                        : player === "paper" && computer === "scissors"
                            ? `Player One: ${player}\nComputer: ${computer}\ncomputer wins`
                            : player === "scissors" && computer === "rock"
                                ? `Player One: ${player}\nComputer: ${computer}\ncomputer wins`
                                : `Player One: ${player}\nComputer: ${computer}\nPlayer wins`;
                                
                                return winner;
}
const displayResult = (result) =>{
    alert(result);
}
const askToPlayAgain = () =>{
    return confirm("Play again?");
}
const thanksForPlaying = ()=> {
    alert("Ok, thanks for playing");
}
initGame();

