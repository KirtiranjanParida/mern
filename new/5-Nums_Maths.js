const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log( balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966   

// console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-US'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math+ " math");
// console.log(Math.abs(-4)+ " math.abs");
// console.log(Math.round(4.6)+ " round");
// console.log(Math.ceil(4.2)+ " ceil");
// console.log(Math.floor(4.9)+ " floor");
// console.log(Math.min(4, 3, 6, 8)+ " is the min num");
// console.log(Math.max(4, 3, 6, 8)+ " is the max num");

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)