// console.log("S");
// console.log("H");
// console.log("I");
// console.log("V");
// console.log("A");
// console.log("M");


function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}

// sayMyName()

function addTwoNumbers(number1, number2 /*this is called parameters */){
    console.log(number1 + number2); // console karne ka matlab ye nahi ki vo value return bhi ho rahi hai jaha function call huva hai
}

const result = addTwoNumbers(4,5 /*this is called arguments */)
addTwoNumbers("4",5)
addTwoNumbers("4","5")
addTwoNumbers(4,null)

console.log(result)// undefined kyo?