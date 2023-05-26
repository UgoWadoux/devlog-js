// you can write js here

console.log('exo-5');
let input = 'Bonjour la baleine'
const vowels = ["A","E","I","O","U","Y"]
const resultArray= []

for (let i=0; i<input.length; i++){
    //console.log(input[i])
    for(let j=0; j<vowels.length; j++){
        if(input[i].toUpperCase() === vowels[j]){
            resultArray.push(input[i].toUpperCase())
        }
    }
}

console.log(resultArray.join(''),input[0])