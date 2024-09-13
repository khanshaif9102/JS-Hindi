// singleton
Object.create

//object literal
const mySym=Symbol("key1")
const JsUser={
    name:"shaif",
    "fullname":"md shaifullah khan",
    [mySym]:"myKey1",
    age:24,
    localtion:"jaipur",
    email:"shaif@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}



console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["fullname"]);
console.log(JsUser[mySym]);

JsUser.email="shaifkhan786@gmail.com";
//Object.freeze(JsUser);
JsUser.email="shaifkhan@gmail.com";

console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

JsUser.greeting2=function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting2());
