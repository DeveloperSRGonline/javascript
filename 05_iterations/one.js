// for loop

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value ${i}`)
//     for(let j = 1; j <= 10; j++){
//         // console.log(`Inner loop value ${j}`)
//         console.log(i + " * " + j + " = " + i*j)
//     }
// }


// console.log(i)

// loop on array example

// const myArray =  ["flash","batman","superman","shaktiman"]


// for(let i = 0; i<myArray.length; i++){
//     console.log(myArray[i])
// }

// print value from 1 to 20 and wwrite text as value of is is in string

// for (let i = 1; i <= 20; i++) {
//     if(i === 10){
//         console.log("10 is detected");
//         break;
//     }
//     console.log(`value of i is ${i}`)
// }

for (let i = 1; i <= 20; i++) {
    if(i === 10){
        console.log("10 is detected");
        continue;
    }
    console.log(`value of i is ${i}`)
}
