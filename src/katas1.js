function oneThroughTwenty() {
  let Numbers = []  
  
  for (let counter = 1; counter <= 20; counter++){
    Numbers.push(counter)
  }
    return Numbers;
}
console.log(oneThroughTwenty())

function evensToTwenty() {
    
  let Numbers = []

  for (let counter = 1; counter <= 20; counter++ ){
    if (counter % 2 == 0) {
      Numbers.push(counter)
    }
  }
  return Numbers
}
 console.log(evensToTwenty())

function oddsToTwenty() {
    
  let Numbers = []

  for (let counter = 1; counter <= 20; counter++ ){
    if (counter % 2 != 0) {
      Numbers.push(counter)
    }
  }
  return Numbers
   
}
console.log(oddsToTwenty())

function multiplesOfFive() {
    
  let NumbersMultiplesOfFive = []

  for (let counter = 1 ; counter <= 100; counter++){
   if (Number.isInteger(counter / 5)){
     NumbersMultiplesOfFive.push(counter)
   }
  }
return NumbersMultiplesOfFive
}
console.log(multiplesOfFive())

function squareNumbers() {
  let quadradosPerfeitos = []

  for(let counter = 1;counter <= 100;counter++){
    if (Number.isInteger(Math.sqrt(counter)) ){
      quadradosPerfeitos.push(counter)
    }
  }
    return quadradosPerfeitos
}
console.log(squareNumbers())

function countingBackwards() {
    
  let ContandoAoContrario = []
  for (let counter = 20; counter >= 1; counter--){
    ContandoAoContrario.push(counter)
  }
  return ContandoAoContrario
}
console.log(countingBackwards())

function evenNumbersBackwards() {
    
let ChamandoParesDeTrasParaFrente = []

for (let counter = 20; counter >= 1 ; counter --){
  if ( counter % 2 == 0 ){
    ChamandoParesDeTrasParaFrente.push(counter)
  }
}
return ChamandoParesDeTrasParaFrente
}
console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
    
  let ChamandoimparesDeTrasParaFrente = []

  for (let counter = 20; counter >= 1 ; counter --){
    if ( counter % 2 != 0 ){
      ChamandoimparesDeTrasParaFrente.push(counter)
    }
  }
  return ChamandoimparesDeTrasParaFrente
}
console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {

  let MultiplosDe5AoContrario = []

  for (let counter = 100; counter >= 1; counter--){
    if(Number.isInteger(counter / 5)){
      MultiplosDe5AoContrario.push(counter)}
  }
return MultiplosDe5AoContrario
}
console.log (multiplesOfFiveBackwards())

function squareNumbersBackwards(){

let quadradosPerfeitosAoContrario = []

for (let counter = 100; counter >= 1; counter--){
  if(Number.isInteger(Math.sqrt(counter))){
    quadradosPerfeitosAoContrario.push(counter)

  }
}
return quadradosPerfeitosAoContrario
}

console.log(squareNumbersBackwards())
