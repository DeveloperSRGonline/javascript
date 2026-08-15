const coding = ["js","py","rb","swift","cpp"]

// coding.forEach( function (WhatEverYouNameItemComesHere){
//     console.log(`${WhatEverYouNameItemComesHere}`);
// } )

// coding.forEach((val)=>{
//     console.log(val)
// })

// function printMe(val){
//     console.log(val)
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(arr)
//     console.log(`${item} ${index}`)
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    },
    {
        languageName: "Swift",
        languageFileName: "swift"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

// in real world most of the cases data comes in array and most / almost every value is object so this need to understand properly

myCoding.forEach((item)=>{
    console.log(`Language is ${item.languageName} and file extension is ${item.languageFileName}`)
})