const accountId = 144553
let accountEmail = "qwrd@xyz.com"
var accountPassword = "12345" // scope issues for var
accountCity = "Jaipur" // we cqan reserve memory like this but not a good practice

accountEmail = "asd@adw.com"
accountPassword = "65423"
accountCity = "Bengaluru"
let accountState;  // no value defined , will give undefined

// accountId = 2 // not allowed

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// to run js code --> node filname.js