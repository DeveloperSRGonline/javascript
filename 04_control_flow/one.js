// if

// if(condition){ - condition honi chahiye true toh hi andar ka code execute hoga
//     // scope
// }

// const isUserLoggedIn = true;

// if(isUserLoggedIn){
//     console.log(`User Logged In`)
// }

// comparision operators - <, >, <=, >=, ==, !=, ===, !== - is se hum condition check karenge then hamein boolean milega jis  se hum if contion ko control karte hai 

// const temperature = 23;

// if(temperature < 50){
//     console.log("less than 50")
// }
// console.log("temperature is greater than 50")


// const score = 200;
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)

// short hand notation
const balance = 1000
// if(balance >=500) console.log("executed"),
// console.log("test2") -- don't do like this

// if(balance < 500){
//     console.log("less than 500")
// }else if(balance < 750){
//     console.log("less than 750")
// }else if(balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }

// let's take real example

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}