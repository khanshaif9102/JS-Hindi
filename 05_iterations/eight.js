const array1=[1,2,3,4,5,6,7,8,9,10];
const initialvalues=0;
// const newArray=array1.reduce((acc,cv)=>{
//     acc+cv,initialvalues
// }, 0)

const newArray=array1.reduce(function (acc,cv){
    console.log(`acc: ${acc} and curval: ${cv}`);
    
    return acc+cv
},0)

console.log(newArray);


