function multilpyByFive(num){
    return num*5
}

multilpyByFive.power = 2
// console.log(multilpyByFive(5))
// console.log(multilpyByFive.power)
// console.log(multilpyByFive.prototype)


function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`${this.username},score is ${this.score}`)
}

const chai = new createUser('chai',25)
const tea = new createUser('tea',250)

chai.increment()
// you dont have to write chai.prototype.printMe() we give you syntatical sugar
chai.printMe()
tea.increment()
tea.printMe()