//if statement 

// const isUserLoggedIn=true;
// const temperature=41

// if(temperature<50){
//     console.log("less than 50");
// } else{
// console.log("greated than 50");
// }


// <, >, <=, >=, ==, !=, ===, !==

// const score=200

// if(score >100){
//     let power="fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance=1000

// // if(balance >500) console.log("Test1") , console.log("Test2");
    
// if(balance <500){
//     console.log("less than 500");
// }
// else if(balance <750){
//     console.log("less than 750")
// } else if(balance<900){
//     console.log("balance 900")
// } else{
//     console.log("less than 1200"); 
// }

const userLoggedIn=true;
const detiCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

// if(userLoggedIn && detiCard){
//     console.log("Allowed to buy coures");
// }

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in!");
}