// const user = {
//     username: "Shivam",
//     price: 999,
//     welcomeMessage: function(){
//         // jo bhi user is function ke andar aaye usko hi welcome message pass hona chahiye
//         // here 'this' refers to the current context
//         console.log(`${this.username}, welcome to website`);
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this) // in the node environment current context is pointing to the {} empty object

// but in the browser console environment current context is pointing to the window object
// [object Window]

// agar yaha par this keyword use kare toh kya context milega

// ye bola jata hai ki arrow function ke andar 'this' keyword use nhi kar sakte


// function chai(){
//     let username = "Shivam"
//     // console.log(this.username) this will not work in context of function
// }

// chai()

// const chai = function(){
//     let username = "Shivam"
//     console.log(this.username)
// }

// chai()

const chai = () => {
    let username = "hitesh"
    // console.log(this.username) // yaha pe bhi undefined
    // console.log(this) 
}
chai()

// const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) => ({username:"Shivam"}) // paranthesis ke andar object return karna padta hai

console.log(addTwo(3,4))

const myArray = [3,4,2,3,7,8,4]

// myArray.forEach(()=>{})