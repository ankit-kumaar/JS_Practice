// two ways to declare an object--> like literals and constructor(gives singleton)


//constructor-->singleton
Object.create;


//object literals

const Jsuser = {}


const Jsuser1 = {
    name:"Ankit"
}
//behind the scene name (key) is kept as string
// .freeze locks the object and we cannot change the value of object.

// function in js are treated as the type 1 citizen as they can be treated as variable without any discrimination


const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //this is the another way to access object data other than "."
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

