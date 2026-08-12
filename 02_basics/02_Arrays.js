const marvelHeros = ["spiderman", "thor", "batman"]
const dc_heros = ["superman","flash","batman"]

// push method
// marvelHeros.push(dc_heros)
// console.log(marvelHeros[3][1])


// concate method
// const allHeros = marvelHeros.concat(dc_heros) // combine all values in single array
// console.log(allHeros)


// spread method - its like glass fall down and its breaking into pieces
// const allHeros = [...marvelHeros, ...dc_heros] 
// console.log(allHeros)


// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const realAnotherArray = anotherArray.flat(Infinity) // it make all values in single array
// console.log(realAnotherArray)

// data scrapping e.g

console.log(Array.isArray("Javascript"));// checking is it an array
console.log(Array.from("Javascript")); // converting string into array
console.log(Array.from({name:"Antigravity"})) // it will give an empty array when it not able to convert it into array - *** INSTRATING *** 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // converting values into array