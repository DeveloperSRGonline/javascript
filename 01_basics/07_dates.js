// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())

// let myCreatedDate = new Date("2023-01-23")// us format (year-month-day)
// india format (day-month-year)
// let myCreatedDate2 = new Date("01-23-2023")
// months count starts from zero in js
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate2.toDateString())


// let myTimeStamp = Date.now()
// console.log(myTimeStamp*60*60)

let newDate = new Date()
console.log(Math.floor(Date.now()/1000))
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone:"UTC"
})