

function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("i");
    console.log("f");
}

//sayMyName()

// function addTwoNumbers(a,b){
//   console.log(a+b);
// }

//  const res=addTwoNumbers(3,4);
//  console.log(res);

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
const res = addTwoNumbers(3, 4);
//  console.log("result:",res);

function loginUserMessage(username) {
    // if (username === undefined) {
    //     console.log("please enter a username!");
    //     return
    // }
    if(!username){
        console.log("please enter a username!");
        return
    }
    else {
        return `${username} just logged In`
    }

}

//console.log(loginUserMessage("shaif"));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2, ...num1){
return num1
}

// console.log(calculateCartPrice(200,300,100,200,400,999));

const user={
    username:"shaif",
    prices:199
}
function handleObject(anyObject){
    console.log(`Username is  ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject({
    username:"shaif",
    price:"399"
});

const myNewArray=[200,400,100,600];
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,100,300,400,200,100]));

