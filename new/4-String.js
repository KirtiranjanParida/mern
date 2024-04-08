const name = "zympsy"
const repoCount = 50

console.log(name + " Value " + repoCount  );

// console.log("Hello my name is "+ name + " and my repo count is "+ repoCount)
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// string interpolation or es6 literals or template literals

const gameName = new String('zympsy-zp-com')

// console.log(gameName[8]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('p'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(3,7)
console.log(anotherString);

const newStringOne = "   zympsy    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://zympsy.com/zympsy%20Panda"

console.log(url.replace('%20', '-'))

console.log(url.includes('Panda'))
console.log(gameName)
console.log(url.split('/'));