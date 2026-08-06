let score = "33";
// let score = null; in this case conversion of number will be 0

// const { score } = req.body -> we do this in the backend in this line its not confirm that it will be number or what

// way to check type of anything are : 
// console.log(typeof score)
// console.log(typeof (score))

// let valueInNumber = Number(score) now its garented that it will be number 
// console.log(typeof valueInNumber) -> Number
// console.log(valueInNumber) -> NaN - not a number

// "33" -> 33
// "33abc" -> NaN
// true -> 1 , false -> 0

let value = "adfadf";
let isBooleanValue = Boolean(value)
// console.log(typeof isBooleanValue) - boolean
console.log(isBooleanValue)// - true

// 1 - true
// 0 - false
// "" - false
// "adfadf" - true

let someValue = 33
let someString = String(someValue)
console.log(someString)