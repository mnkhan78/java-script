// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Rohit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(tinderUser.id);
// console.log(tinderUser["id"]);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "mohammed",
            lastname: "naseem"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //this is not the way to join two object
// console.log(obj3); // --> output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4) //syntax --> Object.assign(target, source1, source2)
// console.log(obj3); // OUTPUT --> { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj3 = Object.assign(obj1, obj2);
// console.log("I am obj1 ",obj1);
// console.log("I am obj3 ", obj3);
//OUTPUT: I am obj1  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// I am obj3  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
/*
NOTE: in the above case obj1 becomes the target that means obj1 will also change... 
so this is not the advisable bcoz the original object (here obj1) will change.
*/

// --> uisng spread operator ----------------
// const obj3 = {...obj1, ...obj2} 
// console.log(obj3);

//array of oibject----------
// const users = [
//     {
//         id: 1,
//         email: "m@gmail.com"
//     },
//     {
//         id: 2,
//         email: "n@gmail.com"
//     },
//     {
//         id: 3,
//         email: "k@gmail.com"
//     },
// ]

// users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hc"
// }

// course.courseInstructor

// const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

