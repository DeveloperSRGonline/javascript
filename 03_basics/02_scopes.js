// let a = 10;
// const b = 20;
// var c = 30; // jab ye tha toh let and const ki jarurat hi kyo padi ?

{
    // this curly braces ko hi bolte hai scope
} // objects mein bhi curly braces hote hai ye different hai  vo object declaration hai - baki jagah jo use ho raha hai vaha ye kehlata hai us ka scope

// console.log(a);
// console.log(b);
// console.log(c);
var c = 300;
// lete hai ye kisi ek developer ne ye value declare ki thi

let a = 300

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner a: ",a)
}
// aur ye maan lete hai ki ye kisi dusre developer ne kisi dusri file mein ye kiya 
console.log("Outer a: ",a)
// console.log(a); /*ReferenceError: a is not defined - jo ki achhi baat hai ye hona hi chahiye*/
// console.log(b); /*ReferenceError: b is not defined - jo ki achhi baat hai ye hona hi chahiye - kyo ki b ka kaam if block ke andar hi khatam hai*/
console.log(c); // ye hai sabse badi problem 

// if ke andar ka hai block scope

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// core and node mein scope alag hota hai.