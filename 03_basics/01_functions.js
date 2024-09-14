

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
console.log(loginUserMessage());
