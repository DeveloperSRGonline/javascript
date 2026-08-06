let myYoutubeName = "NexStackDev";
let anotherName = myYoutubeName;
anotherName = "NexDev";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email:"a@a.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email = "b@b.com";

console.log(userOne.email);
console.log(userTwo.email);
