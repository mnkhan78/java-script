"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

let name = "mnkhan" //string
let age = 23 //integer
let isLoggedIn = false //boolean
const bigInt = 1234567890123456789012345678901234567890n; //bigint
let state; //not initiated
console.log(state); //  output --> 'undefined'


// number => ±(2^53-1)
// bigint => // the "n" at the end means it's a BigInt
// string => "" , '', ``
// boolean => true/false
// null => standalone value (null is not 0)
// undefined => undefined
// symbol => unique

//typeof is not a function, it's an operator
console.log(typeof undefined); // undefined 
console.log(typeof null); // object