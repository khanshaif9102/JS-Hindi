//for

let arr=[10,2,3,4,5,6,7,8,9,10]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]); 
}

for(let i=0;i<10;i++){
    //console.log(`Outer Loop value:${i}`);
    for(let j=0;j<10;j++){
       // console.log(`Inner Loop value: ${j} and inner Loop ${i}`);
     //  console.log(i +" * "+ j + " = "+i*j ); 
    }
}

let myArray=["flash","batman","superman"]
for(let i=0;i<myArray.length;i++){
  //  console.log(myArray[i]);
}

//brak and continue

// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log("detected 5");
        
//         break;
//     }
//     console.log(` value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log("detected 5");
        
        continue;
    }
    console.log(` value of i is ${index}`);
}