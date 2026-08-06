// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 >= 1);
// console.log(2 <= 1);- basic things

// problem come when datatype is not same
console.log("2" > 1); // true - because "2" is converted to 2
console.log("02" > 1); // true - because "02" is converted to 2
console.log(null > 0); // because null is converted to 0
console.log(null == 0); // false - because null is converted to 0
console.log(null >= 0); // true - because null is converted to 0

console.log(null > undefined); // false - because undefined is converted to NaN
console.log(null == undefined); // false - because they are different types
console.log(null >= undefined); // false - because undefined is converted to NaN
console.log(undefined > 0); // false - because undefined is converted to NaN
console.log(undefined == 0); // false - because undefined is converted to NaN
console.log(undefined >= 0); // false - because undefined is converted to NaN
console.log(undefined > null); // false - because null is converted to 0
console.log(undefined == null); // true - because they are both null/undefined
console.log(undefined >= null); // true - because null is converted to 0
console.log(undefined === null); // false - because they are different types
console.log(null === undefined); // false - because they are different types
 
// chije yaad nahi rakhna hai
// avoid these type of comparision