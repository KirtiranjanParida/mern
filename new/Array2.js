const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// console.log(marvel_heros, "marvel heros");
// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros, "allHeros");

const all_new_heros = [...marvel_heros, ...dc_heros]    //spread operator :- it is used to copy, concat and assign method.

console.log(all_new_heros, "all_new_heros");

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(another_array[5][2][0]);

console.log(Array.isArray(another_array))
console.log(Array.from("zympsy-panda")) //It is used to convert any element into an array
// console.log(Array.from({name: "zympsy"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


// [{name:Saneay},{name:Zympsy},{name : Trupti}]