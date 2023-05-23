// you can write js here
console.log('hello from file');
//let kelvins = 294;
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
console.log(kelvins);
let Celsius = kelvins - 273;// les celsius c'es la température en kelvin moins 273
console.log(Celsius);
let fahrenheits = Math.floor(Celsius * (9/5) +32); // Multiplie la valeur de celsius par 9/5 et ajoute ensuite 32
console.log(fahrenheits);
