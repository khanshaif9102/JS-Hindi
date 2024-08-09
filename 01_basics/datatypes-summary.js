// Primitive Data Types
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Java Script Dynamically Typed

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id===anotherId);

const bigNumber = 3456822552225555555n;
console.log(bigNumber);



// Reference Type(Non-Primitive) Data Types
// Array, Objects, Functions

const heros = ["shaktiman","naagaraj","doga"];

let myObj={
    name: "shaif",
    age: 24,
}

const myFunction=function(){
    console.log("hello world");
}

console.log(heros);
console.log(myObj);
console.log(myFunction);


