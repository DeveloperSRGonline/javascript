// singleton object - only when created using constructor thats it
// object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    // "name": "Antigravity", - by default it process as like this key in string
    name: "Antigravity",
    [mySym]:"mykey1",
    age: 21,
    email: "Antigravity@gmail.com",
    "full Name":"Anti Gravity",
    isLoggedIn: false,
    location:"Somewhere on the earth",
    lastLoginDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
}
// console.log(jsUser)

// console.log(jsUser.email)
// console.log(jsUser["full Name"])
// console.log(jsUser[mySym])

// Object.freeze(jsUser)
jsUser.email = "Antiemail@chatgpt.com"
// console.log(jsUser)

// function treated as ap firstOrder function
jsUser.greeting = function(){
    console.log("Hello World")
}
// console.log(jsUser.greeting())

// another example
jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}
jsUser.greetingTwo()
// console.log(jsUser.greeting)