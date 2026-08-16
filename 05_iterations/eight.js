const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, current) {
//     console.log(`acc: ${acc} and current value: ${current}`)
//     return acc + current
// }, 0)

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        item: 'js course',
        price: 999
    },
    {
        item: 'DSA course',
        price: 2999
    },
    {
        item: 'py course',
        price: 1999
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice)