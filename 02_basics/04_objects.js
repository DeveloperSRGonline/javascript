// const tinderUser = new Object() - this is single ton object
const tinderUser = {} // this is not single ton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
    email: "some@some",
    fullName: {
        userFullname: {
            firstName: "Antigravity",
            lastName: "Google"
        }
    }
}

// console.log(regularUser.fullName?.userFullname) - the ? mark is when added then it called optional chaining - it used when we are handling api
// console.log(regularUser.fullName.userFullname)

// combining two objects
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = {obj1,obj2} - this is wrong
// const obj3 = {...obj1,...obj2}
const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3)

const users = [
    {
        id: 1,
        name: "Antigravity"
    },
    {
        id: 2,
        name: "Javascript"
    }
]

// console.log(users[1].name)
const userData = Object.keys(tinderUser)

// users.map((user) => (console.log(`The name of the user is ${user.name} and its id is ${user.id}`)))

// console.log(tinderUser.hasOwnProperty("id"))
// console.log(tinderUser.hasOwnProperty("isLoggedIn"))