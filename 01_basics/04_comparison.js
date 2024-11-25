console.log("02" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//the reson is that an equality check === and comparisons > < >= <= work differently.
//comparisons convert null to a number, treating it as 0.
// that's why (3) null>=0 and (1) null > 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//These conversion should be avoided, clean code--> Priority

// === strict check

console.log("2" === 2);



