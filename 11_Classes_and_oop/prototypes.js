let myName = "hitesh     "

// console.log(myName.trueLength)

let myHeros = ['thor','spiderman']

let heroPower = {
    thorPower:'hammer',
    spidermanPower:'web',

    getSpiderPower:function(){
        console.log(`Spider man has ${this.spidermanPower}`)
    }
}

Object.prototype.shivam = function(){
    console.log(`Shivam is present in all objects`)
}

Array.prototype.heyShivam = function(){
    console.log('Hey from array shivam')
}

// myHeros.shivam()
// heroPower.heyShivam()

// myName.shivam()

const User = {
    username:"shivam"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment:'js Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiaurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"shivam".trueLength()
"iceTea".trueLength()