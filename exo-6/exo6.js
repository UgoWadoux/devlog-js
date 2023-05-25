// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
//console.log(joeInfo.cars.length)
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo['bathrooms'] = 1
//console.log(joeInfo.bathrooms)
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo['garage']= true
//console.log(joeInfo.garage)
var team ={}
team ={
    players:[{
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11,
    }],
    games:[{
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
    }],
    addPlayer : function(firstName,lastName,age){
        return this.players.push({
            firstName,  
            lastName, 
            age,
        })
    },
    addGames: function(opponent,teamPoints,opponentPoints ){
      return this.games.push(
        {
            opponent:opponent,
            teamPoints,
            opponentPoints,
        }
      )  
    }
}

team.addPlayer("Michal","Piroli",28)
team.addPlayer("Zak","Demon",21)
team.addGames("Spurs", 58,12)
team.addGames("Bulls",72,30)
let totalPoints=0
team.games.forEach(items => {
    totalPoints += items.teamPoints    
});
let moyOpponent =0
team.games.forEach(items =>{
    moyOpponent+=items.opponentPoints
});
team.games.forEach(function(items){
    moyOpponent+=items.opponentPoints
} )
let moyTotal = moyOpponent/ team.games.length
// team.players.forEach( items =>{
//     oldestPlayer=items.age
//     if (oldestPlayer< items.age){
//         return oldestPlayer = oldestPlayer.firstName
//     }
// }
// )

function oldestPlayer(){
    let player  
    for(let i=0 ; i<team.players.length; i++){
        if(!player){
            player =team.players[i]
        }
        if(player.age<team.players[i].age){
             player = team.players[i]
        }
    }
    return player
}

let sortPlayers =team.players.sort(function (a, b) {
    var textA = a.lastName.toUpperCase()
    var textB = b.lastName.toUpperCase()
    return textA.localeCompare(textB)
  });

console.log(team, "totalpoints:", totalPoints, "Moyenne opposant:", moyTotal, "Joueur le plus vieux", oldestPlayer(), "joueur par ordre Alphabétique", sortPlayers)

