// concates combine two array and return new  whereas push() add the lements to new array
// spread(...) operator spread every elements of arrays as an individual
//flat(depth of nesting) spread all the nested array to any level


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh"))//converted to array
console.log(Array.from({name: "hitesh"})) // interesting bcz it will give empty array bcz it is confused that key or value will be converted to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//return new array with all set of elements