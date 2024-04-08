//Primitive (Stack Memory)
let ourCompany = "Web_Bocket"
let anotherCompany = ourCompany
anotherCompany = "Bocket_Lamp";


console.log(ourCompany);
console.log(anotherCompany);


//Non-primitive (Heap Memory)

let userOne ={
    email : "abc@gmail.com",
    upi : "123@ybl"
}
let userTwo = userOne
// console.log(userTwo)

userTwo.email = "xyz@gmail.com"

console.log(userOne);
console.log(userTwo);


