//singleTon
//const tinderUser=new Object();
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="shaif"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    name:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"shaif",
            lastName:"khan"
        }
    }
}
//console.log(regularUser.fullName?.userFullName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}
// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2,obj4);
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);

const users=[
    {

    },
    {

    },
    {
        id:1,
        email:"h@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty('isLoggedIn'));

const course={
    name:"Js-Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

//course.courseInstructor

const {courseInstructor:instructor}=course
console.log(instructor);

// const navbar=({company})=>{

// }
// navbar(company="hitesh")

// {
//     "name":"hites",
//     "course":"js in hindi",
//     "price":"free"
// }

