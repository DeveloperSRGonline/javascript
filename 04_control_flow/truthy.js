// const userEmail = "S@s.com" // string ko truthy value maan liya gaya hai
// const userEmail = []
const userEmail = {name: "Sami", id: 1}
// if(Object.keys(userEmail).length === 0){
//     console.log("Object is empty")
// }
// else{
//     console.log("Object is not empty")
// }

// falsy value : false, 0, -0, BigInt(0n), "", null, undefined, NaN
// truthy value : "0", "false", " ", function(){}, [], {}, {}

// console.log(Object.keys(userEmail))

// ?? - null coalescing operator - if null or undefined value is there then it will give second value otherwise first value
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// console.log(val1)

// val1 = null ?? 10 ?? 20

// console.log(val1)


// terniary operator
// condition ? true : false

const age = 20
age >= 18 ? console.log("Allowed") : console.log("Not allowed");
