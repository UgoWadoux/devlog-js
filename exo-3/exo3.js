// you can write js here
console.log('exo-3')
var playerInput = prompt("Your choice ( rock, paper, scissors) ?")
 

function getPlayerChoice(playerInput){
    playerInput = playerInput.toLowerCase()
    if (playerInput=="rock" || playerInput == "paper" || playerInput =="scissors" || playerInput=="bomb"){
        //console.log(playerInput)
        return playerInput
    }else{
        console.log('Tu sais pas écrire recommence')
        throw new Error("Tu sais pas écrire")
    }
}
//getPlayerChoice(playerInput)
function getComputerChoice(){
    let Random = Math.floor(Math.random()*3)
    
    if(Random==0){
        console.log("rock")
        return "rock"
    }
    if(Random==1){
        console.log("paper")
        return "paper"
    }
    if(Random==2){
        console.log("scissors")
        return "scissors"
    }
}

function findWinner(playerChoice,computerChoice){

    if(playerChoice == computerChoice){
        //console.log("Tied")
        return "Tied"
    }
    if(playerChoice == "rock"){
        if(computerChoice == "scissors"){
            return "Won"
        }else {
            return "Lost"
        }
    }
    if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            return "Won"
        }else{
            return "Lost"
        }
    }
    if(playerChoice == "scissors"){
        if(computerChoice == "paper"){
            return "Won"
        }else{
            return "Lost"
        }
    }
    if (playerChoice == "bomb"){
        return "Génie supreme tu as gagné"
    }
}
//console.log(findWinner(getPlayerChoice(playerInput), getComputerChoice()))
function playGame(){
    let uChoice = getPlayerChoice(playerInput)
    let computerChoice= getComputerChoice()
    //console.log("choix humain:",uChoice,"choix ordi",computerChoice)
    console.log(findWinner(uChoice,computerChoice))
}
playGame()