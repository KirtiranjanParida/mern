// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "human"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "zympsy",
            lastname: "panda"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname)

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const objectName = { obj1, obj2 }

// console.log(objectName);
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "zym@gmail.com"
    },
    {
        id: 2,
        email: "ympsy@gmail.com"
    },
    {
        id: 3,
        email: "sy@gmail.com"
    },
]
console.log(users);
console.log(users[2])

// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "javascript",
    price: "999k",
    courseInstructor: "zympsy"
}

console.log(course.courseInstructor) //object destructure

const {courseInstructor: instructor, coursename : namecourse} = course //object de-structure

// console.log(courseInstructor);
console.log(instructor);
console.log(namecourse);


