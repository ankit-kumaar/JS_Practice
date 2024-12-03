// 1. used for instant execution of the funciton
//example - get the db connection as the web-app starts
// 2. also used to avoid polution from the from global scope function
// Immediately Invoked Function Expressions (IIFE)

//syntax: (function definition)(execution) = ()()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //--> ";" is expected to break the scope of the function.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
