const name = "John";
const repoCount = 42;

// console.log(name + " " + repoCount); // basic syntax (not recommended) outdated

// console.log(`${name} has ${repoCount} repositories`); // template literals (recommended)

// const gameName = new String("Rohan-Rn")
// console.log(gameName);

/*
String {'Rohan'}
// key : value - pair
0: "R" 
1: "o"
2: "h"
3: "a"
4: "n"
length: 5
[[Prototype]]: String
[[PrimitiveValue]]: "Rohan"

*/

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toLowerCase())
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(0))
// console.log(gameName.indexOf('o'))

// const gameName = new String("Rohan-Rn")
 
// const newString = gameName.slice(0,4)
// console.log(newString)

// in slice we can also write negative values
// const newString = gameName.slice(-8,4)
// console.log(newString)

// // spliting on basic of "-"
// console.log(gameName.split('-'))


// const newStringOne = "   Rohan   "
// console.log(newStringOne)
// console.log(newStringOne.trim())
// console.log(newStringOne.trimStart())
// console.log(newStringOne.trimEnd())

// const url = "https://google.com/search?q=javascript%20something"
// // console.log(url.replace("%20","_"))

// console.log(url.includes("javascript"))

// console.log(url.)

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words);
console.log(words[3]);
// Expected output: "fox"
