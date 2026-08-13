function loginUserMessage(username = "Shivam" /*this is a default parameter because if no value provided to the username by default shivam will be pass */){
    // if(username === undefined){ // this will run when condition is true
    //     return `Please enter a username`
    // }

    // one more way 
    if(!username){ 
        return "Please enter the username"
    }
    return `${username}, Welcome to the world of JavaScript` // this is called string interpolation or template literals
}

// console.log(loginUserMessage("Antigravity"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage()) this will give undefined
console.log(loginUserMessage()) // if you want to avoid this type of situation so you can use default parameter