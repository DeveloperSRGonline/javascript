// Primitive Data types - call by value - when copied original refrance is not give its copy given to us - when changes happened it happen on the copy not original data
/*
1. Number - 1234
2. String - "Hello"
3. Boolean - true/false
4. Null - value(empty) - eg. let temperature = null
5. Undefined - value is not defined - eg. let name;
6. Symbol - unique identifier - eg. let id = Symbol('id');
7. BigInt - large numbers - eg. let bigNumber = 123n;
*/

// Non-Primitive Data types  - Refrence Type - when copied original refrance is given to us - changes happen on the original data
/*
1. Object - IMP*
    - eg. let user = {name: "John", age: 30};
2. Array
    - eg. let fruits = ["apple", "banana", "orange"];
3. Function
    - eg. function greet() {console.log("Hello");}
*/

// Dynamically Typed Language - because here no need of defining type 
// eg. let name = "John"; - here no need of defining type

// Variable's long name is a good practice long name but if it defining its meaning its good to have

let heros = ["shaktiman","nagraj","doga"]

let myObj = {
    name:"gangadhar",
    age:55
}

const myFunction = function(){
    console.log("Hello Javascript");
}

// console.log(typeof heros); - object
// console.log(typeof myObj); - object
// console.log(typeof myFunction); - function (object function)