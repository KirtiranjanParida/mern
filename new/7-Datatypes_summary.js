//  Primitive 
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34565435766543567542345678902345678902345672345678n;
console.log(bigNumber);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(heros);

let myObj = {
    name: "zympsy",
    age: 22
}
console.log(myObj);

const myFunction = function(){
    console.log("Hello world");
}
myFunction();
console.log(typeof myObj);


// function myName(){
//     console.log("Saneay");
// }
// myName()