// On the basis of how the memory allocation is done, there are types of data-types

// Primitives - the reference of the memory block not given, a copy is created of the block memory
// 7 types: String, Number, Boolean, null, undefined, Symbol(to make a elemnet unique using symbol), BigInt

// Reference - the reference of the memory is given
// Array, Objects, Functions

// JS is Dynamic typed because it infer the data type of a variable at runtime, rather than at compile time
//const score:number = 100 -> typescript
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
