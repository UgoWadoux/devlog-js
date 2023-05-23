// you can write js here
console.log('exo-3')
var playerInput = prompt("Your choice ( rock, paper, scissors) ?")
 playerInput = playerInput.toLowerCase()

function getPlayerChoice(playerInput){
    if (playerInput=="rock" | playerInput == "paper" | playerInput =="scissors"){
        console.log(playerInput)
        return playerInput
    }else{
        console.log('Tu sais pas écrire recommence')
    }
}
getPlayerChoice(playerInput)
