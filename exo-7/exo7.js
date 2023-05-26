console.log("exo-7");
for (let i=0;i<jsonDatas.length;i++){

    console.log(jsonDatas[i])
}
let tradObject={
    videoGame:"Jeux Videos",
    car:"Voiture",
    house:"Maison",
    game:"Jeux",
    show:"Concert",
}
jsonDatas.forEach(function (element){
    //if (element.type==="car") {
     //   element.typeTrad = "voiture"
    //}
    //if (element.type==="house"){
      //  element.typeTrad="Maison"
    //}
    element.typeTrade = tradObject[element.type]

    })
console.log(jsonDatas);