const userEmail=[]

if(userEmail){
    console.log("Got user email");
} else{
    console.log("Dont have user email");
}

//Falsy Values
// false , 0 , -0 , BigInt 0n, "" , null , undefined , Nan

//Truthy Value
// [] , " " , 1 , "abc" , "0" , 'false' , {} , function(){} 

if(userEmail.length===0){
    console.log("false");
} else{
    console.log("true");
}

const emptyObject={}
if(Object.keys(emptyObject).length===0){
    console.log("is empty");
}
else{
    console.log("not empty");
}

//Nullish Coalescing Operator(??): null, undefined

let val1;
val1=5 ?? 10
let val2;
val2=null ?? 5
val2=undefined ?? 10
var val3;
val3=undefined ?? null;
console.log(val3);
val3=null ?? undefined;

let val4;
val4=null ?? 10 ?? 20;
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


//Terniary Operator
//condition ? true : false

const iceTeaPrice=100;
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")

