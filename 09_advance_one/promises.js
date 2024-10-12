const promiseOne=new Promise(function (resolve,reject){
    //Do an async task
    //DB calls, cryptoGraphy,netWorkCall
    setTimeout(function (){
        console.log('Async Task is complete');
        resolve();
    },1000)
});

promiseOne.then(function (){
    console.log("Promise Consume");
    
})

new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("async Task 2");
        resolve();
    },1000)
}).then(function (){
    console.log("async 2 resolved");
    
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"shaif",email:"shaif@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({userName:"shaif",password:"123"})
        } else{
            reject("Errro : Something went wrong");
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.userName;
})
.then((userName)=>{
    console.log(userName);
    
})
.catch(function(error){
    console.log(error);
}).finally(()=>console.log("Finally the promise is either resolved or rejected"))


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({userName:"javascript",password:"123"})
        } else{
            reject("Error: JS went wrong!")
        }
    },1000)
})


async function ConsumePromise5() {
try{
    const response=await promiseFive
console.log(response);
}catch(error){
    console.log(error);
}
}

ConsumePromise5();



async function getAllUsers() {
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:",error);
    }
}

getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error=>console.log(error)));
