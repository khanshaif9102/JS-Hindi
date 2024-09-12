//Array
const myArray=[0,1,2,3,4,5];
const myHeroes=["iron man","captain america","thor"];
const myArray2=new Array(1,2,3,4,5);

console.log(myArray[1]);

//methods
// myArray.push(6)
// myArray.push(7)
// myArray.pop()
//myArray.unshift(0);
// myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(0));
// const newArr=myArray.join();
// console.log(newArr);


// console.log(myArray);

//slice, splice
console.log("A ",myArray);

const myn1=myArray.slice(1,3);
console.log("B ",myArray);

console.log(myn1);


const myn2=myArray.splice(1,3)
console.log("C ",myArray);

console.log(myn2);
