// fetch('https://something.com').then().catch().finally() - this is not a promises

// const promiseOne = new Promise(function(resolve,reject){
//     // do an async task
//     // db call, cryptography,network call
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     },1000)
// })

// // consumption
// promiseOne.then(function(){
//     console.log("promise consumed")
// })



// new Promise(function(resolve,,reject){

//     setTimeout(function(){
//         console.log('Async task 2')
//         resolve()
//     })
// }).then(function(){
//     console.log('Async 2 resolved')
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({
//             username:"Javascript",
//             email:"javascript@email.com"
//         })
//     },5000)
// })

// promiseThree.then((
//     function(user){
//         console.log(user)
//     }
// ))


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let errorr = false;
//         if(!errorr){
//             resolve({username:"jsuser",password:"123"})
//         }else{
//             reject('Error:js user does not exist')
//         }
//     })
// })
// promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.username
// }).
// then((u)=>{
//     console.log(u)
// }).
// catch((error)=>{
//     console.log(error)
// }).
// finally(function(){
//     console.log("Promise is either resolved or rejected")
// })


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let errorr = true;
//         if(!errorr){
//             resolve({username:"javascript",password:"123"})
//         }else{
//             reject('Error:js user does not exist')
//         }
//     })
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// }

// consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10')
//     const data = await response.json()
//     console.log(data.data)
//     }
//     catch(error){
//         console.log("Error: ",error)
//     }

// }
// getAllUsers()


fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10')
.then((response)=>{
    return response.json()
})
.then((val)=> {
    console.log(val.data)
})
.catch((error)=>{
    console.log("Error: ",error)
})