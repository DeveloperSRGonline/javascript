const score = 400;
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 234.23234
// console.log(otherNumber.toPrecision(5));

const hundrads = 10000000
// console.log(hundrads.toLocaleString('en-IN'))

// ********************* Math ********************

// console.log(Math)
// Math.random()
// 0.919279785010479
// Math.random()*10
// 5.546200079305251
// Math.random()*10
// 9.859172437603537
// Math.floor(Math.random()*10+1)
// 6
// Math.floor(Math.random()*10+1)
// 2
// Math.floor(Math.random()*10+1)
// 2
// Math.floor(Math.random()*10+1)
// 6
// Math.floor(Math.random()*10+1)
// 6
// Math.floor(Math.random()*10+1)
// 9
// Math.floor(Math.random()*10+1)
// 10
// Math.floor(Math.random()*10+1)
// 9
// Math.floor(Math.random()*10+1)
// 9
// Math.floor(Math.random()*10+1)
// 6
// Math.floor(Math.random()*1000+1)
// 751
// Math.floor(Math.random()*9000+1000)
// 8411
// Math.floor(Math.random()*9000+1000)
// 3275
// Math.floor(Math.random()*9000+1000)
// 9014
// Math.floor(Math.random()*9000+1000)
// 7172
// Math.floor(Math.random()*9000+1000)
// 9706
// Math.floor(Math.random()*9000+1000)
// 1797
// Math.floor(Math.random()*9000+1000)
// 2283
// Math.floor(Math.random()*9000+1000)
// 5823
// Math.floor(Math.random()*9000+1000)
// 2223
// Math.floor(Math.random()*9000+1000)// simple otp like generator
// 6435
// Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}E: 2.718281828459045LN2: 0.6931471805599453LN10: 2.302585092994046LOG2E: 1.4426950408889634LOG10E: 0.4342944819032518PI: 3.141592653589793SQRT1_2: 0.7071067811865476SQRT2: 1.4142135623730951abs: ƒ abs()acos: ƒ acos()acosh: ƒ acosh()asin: ƒ asin()asinh: ƒ asinh()atan: ƒ atan()atan2: ƒ atan2()atanh: ƒ atanh()cbrt: ƒ cbrt()ceil: ƒ ceil()clz32: ƒ clz32()cos: ƒ cos()cosh: ƒ cosh()exp: ƒ exp()expm1: ƒ expm1()f16round: ƒ f16round()floor: ƒ floor()fround: ƒ fround()hypot: ƒ hypot()imul: ƒ imul()log: ƒ log()log1p: ƒ log1p()log2: ƒ log2()log10: ƒ log10()max: ƒ max()length: 2name: "max"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]min: ƒ min()length: 2name: "min"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]pow: ƒ pow()random: ƒ random()length: 0name: "random"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]round: ƒ round()sign: ƒ sign()sin: ƒ sin()sinh: ƒ sinh()sqrt: ƒ sqrt()sumPrecise: ƒ sumPrecise()tan: ƒ tan()tanh: ƒ tanh()trunc: ƒ trunc()Symbol(Symbol.toStringTag): "Math"[[Prototype]]: Object
// Math.abs(-4)
// 4
// Math.round(12.23)
// 12
// Math.ceil(12.23)
// 13
// Math.floor(23.56)
// 23
// Math.pow(2,3)
// 8
// let arr = [1,2,3,4,5]
// Math.max(...arr)
// 5
// Math.min(arr)
// NaN
// Math.min(...arr)
// 1
// Math.random()
// 0.08723284042411461
// Math.random()
// 0.14125303053552463
// Math.random()
// 0.20197473063606308
// Math.random()
// 0.919279785010479



// Calling a function dynamically using step.name and step.arguments

const availableFunctions = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

const step = {
    name: 'subtract',
    arguments: [5, 3]
};

console.log(availableFunctions[step.name](...step.arguments));
// Output: 2
