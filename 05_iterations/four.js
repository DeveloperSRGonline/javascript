const myObj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift"
}

// problem is for of not working on objects
// But loop toh lagana hi hai - solution is for-in

// for (const key in myObj) {
//     console.log(`${key} : ${myObj[key]}`)
//     // console.log(key)
// }

/*
js : javascript
cpp : c++
rb : ruby
swift : swift
*/

const programing = ["js","py","rb","swift","cpp"]

// for (const key in programing) {
//     console.log(`${key} : ${programing[key]}`)
//     // console.log(key)
// }


/*
0 : js
1 : py
2 : rb
3 : swift
4 : cpp
*/

const map = new Map()

map.set('IN', "India");
map.set('UK', "United Kingdom");
map.set('US', "United States");
map.set('FR', "France");

// for (const key in map) {
//     console.log(`${key} : ${map[key]}`)
// } - it is not iterable