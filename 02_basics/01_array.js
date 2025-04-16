// array
//we can store any kind of datatypes in 'array' in JS
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4) 
// console.log(myArr[1]);

//---------- Array methods --------------


//push, pop & shift, unshift
// myArr.push(6) //adding new element in 'back' of array
// myArr.push(7)

// myArr.pop() // removing 'last' element of array

// myArr.unshift(9) //adding new element in 'front' of an array
// myArr.shift() //removing 'first' element of an array
// console.log(myArr);

/* 
NOTE: Performance:- push/pop run fast while shift/unshift are slow 
*/

// slice, splice

console.log("original: ", myArr);

const myn1 = myArr.slice(1, 3)

console.log("sliced array: ", myn1);
console.log("origin after slicing: ", myArr);


const myn2 = myArr.splice(1, 3)

console.log("spliced array: ", myn2);
console.log("original after splicing: ", myArr);

/* 
NOTE: 'slice' does not include last index and also original remains same
       BUT 'splice' include last index and also changes the original array
*/