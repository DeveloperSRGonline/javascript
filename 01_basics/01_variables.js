// investigative study
const accountId = 121232;
let accountEmail = "shahid@gmail.com";
var accountPassword = "123456";
// accountCity = "Jaipur";

// challenge  need default state
let accountState;


// accountId = 2; Assignment to constant variable. - not allowed
// console.log(accountId);

accountEmail = "a@a.com"
// console.log(accountEmail);

accountPassword = "654321"
// console.log(accountPassword);

console.table([accountId, accountEmail, accountPassword, accountState]);


/*
Preffer not to use var
because of issue in block scope and functional scope
Use let instead of var

┌───────┬───────────┐
│ (idx) │ Values    │
├───────┼───────────┤
│     0 │ 121232    │
│     1 │ "a@a.com" │
│     2 │ "654321"  │
│     3 │ undefined │
└───────┴───────────┘
*/