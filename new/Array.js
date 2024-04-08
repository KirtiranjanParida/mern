const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const diffData = ["Pradhyuman", 344, true, null, undefined, 56785474657665546587875457755n,{name:"Saneay", age : 23},[1,2,3]]
console.log(diffData)

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr);
console.log(myArr[3]);

//Array Methods
// console.log(myArr.length)
console.log(myArr.push(7));
console.log(myArr.push(10)); //push methods add the element in the last of the index of an array. and increase the size of the array.
// console.log(myArr);
console.log(myArr.pop()); //It removes the last element from the array and reduce the size of the array.
// console.log(myArr)
// console.log(myHeors)
console.log(myHeors.unshift("Ironman"));
// console.log(myHeors);
console.log(myHeors.shift()); //It returns the deleted item.
// console.log(myHeors);
// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

console.log(myArr.includes(4));
console.log(myArr.indexOf(50));

// console.log(myArr2.indexOf(3));
// console.log(myHeors.indexOf("shaktiman"));

let myString = "hello";
// console.log(myString.charAt(3));

const newArr = myArr.join()
console.log( newArr) //join method converts the array into string.

// console.log(myArr);
// console.log(typeof newArr);


// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 4)  //it doesn't includes the last end index in the return value. and 2nd difference it doesn't return a new array.

// console.log(myn1, "slice");
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //it include the end index element in the array and it returns the new array of spliced items.

console.log("C ", myArr);
console.log(myn2, "splice");

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1 and increases the array length
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(1, 1, 'June');
// Replaces May at index 4 with June
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

months.splice(5,0,'june','july');
console.log(months);