function one(){
    const username = "Shivam"

    function two(){
        const website = "Youtube"
        console.log(username)
    }

    // console.log(website) // iska scope toh two function tak hi tha
    two()
}

one()

// har bar ek function ke liye seperate ek scope banege

if(true){
    const username = "Shivam"
    if(username === "Shivam"){
        const website = " Youtube"
        // console.log(`${username} ${website}`)
    }
    // console.log(website) - this and
}

// console.log(username) - this will give it is not defined as its scope is only inside the if block


// ************ Instresting ************************

console.log(addOne(5));
function addOne(num){
    return num + 1;
}


console.log(addTwo(5)); // hoisting concept is theref
const addTwo = function(num){ // ye bhi function hi hai but isko kabhi kabhi expression bhi bola jata hai
    return num + 2;
}
