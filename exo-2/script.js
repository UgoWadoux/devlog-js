// you can write js here
console.log('exo-2')
const myDate = new Date('may 26, 2023 16:00')
let isTesting =true
if (isTesting){
    var date = prompt("Date a tester")
    var heure = prompt("Heure à tester")
}else{
    var heure = myDate.getHours()
    var date = myDate.getDay()
}


console.log(myDate.getDay())
 let semaine = "jour de la semaine"
 let weekend = "c'est le weelkend"

// if(myDate.getDay()>0 && myDate.getDay()<6){
//     console.log(semaine)
// }else{
//     console.log(weekend)
// }

function isWeek(myDateParameter){
    console.log(myDateParameter)
    return myDateParameter > 0 
        && myDateParameter < 6
       
}

function FridayWeekend(date){
    return date ==5
    && heure>16
}

function MondayWeekend(date){
    return date==1
    && heure <9
}

//console.log(isWeek(myDate))

if(isWeek(date)&&(FridayWeekend(date)==false)&&(MondayWeekend(date)==false)){
    console.log(semaine)
}else{
    console.log(weekend)
}