//iife --> Immediately Invoked Function Expression

/* 
NOTE:- 
common syntax
(function (){
})();

or

(() => {
    code here 
    })();

An IIFE is a function that runs immediately after is defined.
variable declared inside the iife are scoped to the function and can not be aaccessed outside.

*/

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`My name is , ${name}`);
} )('Mohammed')
