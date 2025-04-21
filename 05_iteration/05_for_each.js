/*
NOTES:
    ***It does NOT RETURN a new array (unlike map() or filter())

    arr.forEach( call_back_fn )

    array.forEach((element, index, array) => {
    // code here
})

*/

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach((item) =>  console.log(item.languageFileName) )

coding.forEach((item, index, arr) => {
    console.log(`the current element is ${item} and its index is ${index}, while the whole array is ${arr}`);
    
})
