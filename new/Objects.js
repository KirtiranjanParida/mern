// singleton - it means in a class we can create only single instance for the application.

// object literals - you can consider it as a datatype to declare an object in the form of key and value

const mySym = Symbol("key1")

const JsUser = {
    name: "Zympsy",
    "full name": "Zympsy Panda",
    [mySym]: "mykey1",
    age: 88,
    location: "Kolkata",
    email: "Zympsy@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]    
}
// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["email"])
// // console.log(JsUser.full name)
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Zympsy@chatgpt.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)    //After using freeze method we can't update or modify the object.
JsUser.email = "Zympsy@microsoft.com"
// console.log(JsUser);

JsUser.pincode = "567483"
// console.log(JsUser);

JsUser.address = "BBSR";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting()
console.log(JsUser)

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`) ;
}
JsUser.greetingTwo()



// ``= ES6 literals
// string interpolation
// template literal