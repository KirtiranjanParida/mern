const accountId = 144553    //number
let accountEmail = "webbocket@gmail.com"    //string
var accountPassword = "12345678"    //String
accountCity = "bhubaneswar" //String
let accountState = "odisha";    //String

let account_Email = "zp@gmail.com"
// var accountPassword = "87654321"
// accountCity = "Bhubaneswar/Kolkata"

// accountId = 456893;


console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(accountId);
console.log(accountState)


console.table([ accountId, accountEmail, accountPassword, accountCity, accountState])

//we can't declare same variable name multiple time it will give an error.

// in var and let we can change the value of the variable but in const if once we initialize a value and later on want to change the value it will give an error . so we can't change the value in const if once declared.

//var works on global scope and let and const works on block scope.