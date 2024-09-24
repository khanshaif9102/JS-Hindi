//const  coding=["Js","ruby","Java","python"];

// const values=coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10];

// const newNums=myNums.filter( (num) => num>4 )
// const newNums=myNums.filter( (num) => {
//     return num>4
// } )

// const newNums=[];
// myNums.forEach( (num) =>{
//     if(num>4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);


const books=[
    {title:"Book One",genre:"Fiction",publish:1981,edition:2004},
    {title:"Book two",genre:"Non Fiction",publish:1992,edition:2005},
    {title:"Book three",genre:"History",publish:1999,edition:2007},
    {title:"Book four",genre:"Science",publish:2009,edition:2014},
    {title:"Book five",genre:"History",publish:1986,edition:1996}
];

let userBooks=books.filter( (bk) => bk.genre==='History');
 userBooks=books.filter( (bk) => { 
    return bk.publish>= 1990 && bk.genre==='History'
});

console.log(userBooks);
