// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
let last = secretMessage.pop()
//console.log(secretMessage)
secretMessage.push("to", "program")
//console.log(secretMessage)
secretMessage[6] = "right"
let first =secretMessage.shift()
//console.log(secretMessage)
secretMessage.unshift("Programming")
//console.log(secretMessage)
secretMessage.splice(5,5, "know")
//console.log(secretMessage)
//secretMessage.join()
console.log(secretMessage.join())