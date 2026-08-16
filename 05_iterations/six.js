// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values)
//OUTPUT
// undefined - because for each does not return anything we want or not

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num)=>{
//     return num > 4
// })
// console.log(newNums)

// const newNums = []

// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books = [
    {title: "Book One", genre:"History", publish: 1981, edition: 1981},
    {title: "Book Two", genre:"Science", publish: 1982, edition: 1982},
    {title: "Book Three", genre:"History", publish: 1983, edition: 1983},
    {title: "Book Four", genre:"Science", publish: 1984, edition: 1984},
    {title: "Book Five", genre:"History", publish: 1985, edition: 1985},
    {title: "Book Six", genre:"Science", publish: 1986, edition: 1986},
    {title: "Book Seven", genre:"History", publish: 1987, edition: 1987},
    {title: "Book Eight", genre:"Science", publish: 1988, edition: 1988},
    {title: "Book Nine", genre:"History", publish: 1989, edition: 1989},
    {title: "Book Ten", genre:"Science", publish: 1990, edition: 1990},
]

// const userBooks = books.filter((bk)=>bk.genre === "History")

const userBooks = books.filter((bk)=>bk.publish >= 1985 && bk.genre === "Science")
console.log(userBooks)