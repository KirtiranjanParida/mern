// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleString('en-IN', { timeZone: 'IST' }));
// console.log(typeof myDate);

let myCreatedDate = new Date("01-14-2023")
console.log( myCreatedDate.toLocaleString()); //method in js used to convert date object to string

let myTimeStamp = Date.now() 

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })