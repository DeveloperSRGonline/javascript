// array

const myArray = [0,1, 2, 3, 4, 5]
// each one inside it is called an element

// console.log(myArray[0])

let myArray2 = new Array("Shaktiman","nagraj")

// Array methods

// console.log(myArray.push(6))
// console.log(myArray.push(7))
// console.log(myArray.pop())

// console.log(myArray.shift())
// console.log(myArray.unshift(1))
// console.log(myArray)

// console.log(myArray.indexOf(3))

// interview question

console.log("A", myArray)

const myn1 = myArray.slice(1,3)
console.log("slice", myn1)

console.log("B", myArray)

const myn2 = myArray.splice(1,3)
console.log("C",myArray)

console.log("splice", myn2)

// difference is slice not modify the original array , and splice modify the original array

