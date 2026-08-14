// const userEmail = "S@s.com" // string ko truthy value maan liya gaya hai
// const userEmail = []
const userEmail = {name: "Sami", id: 1}
if(Object.keys(userEmail).length === 0){
    console.log("Object is empty")
}
else{
    console.log("Object is not empty")
}

// falsy value : false, 0, -0, BigInt(0n), "", null, undefined, NaN
// truthy value : "0", "false", " ", function(){}, [], {}, {}

console.log(Object.keys(userEmail))