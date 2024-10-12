const user={
    username:"shaif",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        //console.log("Got User details from db");
        //console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

//console.log(user.getUserDetails());

// console.log(user.username);
// console.log(this);

// const promiseOne=new Promise();
// const date=new Date();
// console.log(date.toLocaleString);

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this;
}

const userOne=new User("shaif",12,true);
const userTwo=new User("chai aur code",11, false);
console.log(userOne.constructor);
console.log(userTwo);


