// if {} comes with a if-else or function then it is called as scope

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
    
}  //block scope --> inside { }
    //global scope --> outside { }



// console.log(a); //let a scope will not be covered outside the if-else
// console.log(b); // const b scope will also be not covered outside the if-else 
// console.log(c); // var c scope will be covered outside the if-else which is a problem


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // will give error bcz website is declare inside two and asked to called outside the function

     two()

}

// one()
// closure - In nested function child function can access the parent variable.


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}