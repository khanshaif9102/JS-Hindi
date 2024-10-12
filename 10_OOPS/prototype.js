// let myName="hitesh   "
// myName.prototype.truelength=function(){
    
// }
// console.log(myName.truelength());

let myHeros=["thor","spiderman"];

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spider power is ${this.spiderman}`);
    },

    getThorpower:function(){
        console.log(`Thor power is ${this.thor}`);
    }
}

Object.prototype.shaif=function(){
    console.log("shaif is present in all objects");
}

Array.prototype.heyShaif=function(){
    console.log("shiaf says hello");
}

// heroPower.shaif();
// myHeros.shaif()

// myHeros.heyShaif();
// heroPower.heyShaif();


//Inheritance

const User={
    name:"chai",
    email:"chai@google.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailabe:false
}
const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User;

//Moder syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername="ChaiAurCode       "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is :${this.trim().length}`);
}

anotherUsername.trueLength()

"shaif".trueLength()
"teac".trueLength();