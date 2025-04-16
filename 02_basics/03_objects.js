// singleton
// Object.create

// object literals

const users = {
    myname: "mnkhan",
    house_no: 15
}

const mySym = Symbol("key1")


const JsUser = {
    name: "Khan",
    "full name": "Mohammed Naseem",
    [mySym]: "mykey1",
    age: 23,
    location: "Kolkata",
    email: "mnk@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //another method to access elements of objects
// console.log(JsUser["full name"]) // --> this is the only way to access this
// console.log(JsUser[mySym])

JsUser.email = "mnk@gmail.com"
// Object.freeze(JsUser) // freeezes the object therefore, any changes can not be done in object 
JsUser.email = "mnk@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello! My name is ${this.name}`); //'this' refers to the current object i.e JsUser
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());