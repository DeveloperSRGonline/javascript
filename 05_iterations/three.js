// for of loop

// [{},{},{}] array of objects

// const array = [
//     {id: 1, name: "raj"},
//     {id: 2, name: "rohit"},
//     {id: 3, name: "roshan"}
// ]


// for (const element of array /* object could not the usual object */) {
//     console.log(element)
// }

// const greeting = "Hello Shivam"

// for(const greet of greeting){
//     if(greet === " ") continue
//     console.log(`per ch arachter : ${greet}`)
// }

const map = new Map() //  remember insersion order

map.set('IN', "India");
map.set('UK', "United Kingdom");
map.set('US', "United States");
map.set('FR', "France");
// map.set('IN', "India"); - map only set unique values


for (const [key, value] of map) {
    console.log(key, ":", value)
}


console.log(map.get("IN"))

// console.log(map)

// const myObject = {
//     "game1":"NFS",
//     "game2":"spiderman",
//     "game3":"GTA"
// }

// for (const [key,value] of myObject) {
//     console.log(key,":",value)
// }  TypeError: myObject is not iterable