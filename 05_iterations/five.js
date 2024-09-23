const coding=["Js","java","cpp","python"];

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach(function (i) {
//     console.log(i);
// })

// coding.forEach( (i) => {
//     console.log(i);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoding=[
    {
        languageName:"javaScript",
        languageFileName:"Js"
    },
    {
        languageName:"Java",
        languageFileName:"Java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
console.log(item.languageName,' = ',item.languageFileName);
})