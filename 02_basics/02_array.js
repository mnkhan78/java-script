const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //it is not the way to add two arrays

// console.log(marvel_heros);
// OUTPUT --> [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


// --- ADDING TWO ARRAYS----->
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// Using spread operator (...)
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

// const real_another_array = another_array.flat(Infinity) //flattened the 3d, 4d.... array
// console.log(real_another_array);

// OUTPUT: [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]


// console.log(Array.isArray("Hitesh")) //OUTPUT: false
// console.log(Array.from("Hitesh")) //array formation
// console.log(Array.from({name: "hitesh"})) // interesting!  

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //array formation...