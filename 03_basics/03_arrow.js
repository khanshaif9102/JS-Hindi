const user={
    username:"shaif",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welsome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="shaif"
//     console.log(this.username);
// }
// chai()

// const chai=function(){
//     let username="shaif"
//     console.log(this.username);
// }

const chai=()=>{
    let username="shaif"
    console.log(this);
}

// chai();

// const addtwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addtwo(3,4));

// const addtwo=(num1,num2)=>  num1+num2;



// const addtwo=(num1,num2) =>  (num1+num2)
const addtwo=(num1,num2) =>  ({username:"shaif"})
console.log(addtwo(3,4));

// const myArray=[2,4,5,6,7]
// myArray.forEach()