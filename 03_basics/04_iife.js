// function chai(){
//     console.log(`DB Connected`)
// }
// chai()

// IIFE - Immediately Invoked Function Expression
// isko isliye use karte hai kyuki iska Global Scope aur Function Scope ko pollution se bachata hai

(function chai(){
    // named iife
    console.log(`DB Connected using IIFE`)
})(); // -> ye semin color jaruri hai jab do iife ek saath jab likhna

// arrow function example

((name) => { // ye hai unnamed iife
    console.log(`DB Connected using arrow function ${name}`)
})("Shivam");