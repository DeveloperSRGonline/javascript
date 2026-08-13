// the ... is called rest and spread too but on basis of use cases and place where it is used

function calculateCartPrice(val1,val2,...num1 /* in this case its rest operator */){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000,4000))


// handling object in function

const user = {
    username:"Shivam",
    prices:199 // in case aisa kuch huva toh chije problem karege in chijo ke liye hi log typescript likhna pasand karte hai - jiske vajah se type checking ho jaye
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject({
    username:"hitesh",
    price:2999
})


// handling array in function
const myNewArray = [134,256,767,123]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2,4,6,8,10]));