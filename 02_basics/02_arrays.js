const marvel_heroes=["thor","ironman","spiderman"];
const dc_heroes=["superman","flash","batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const newarray=marvel_heroes.concat(dc_heroes);
// console.log(newarray);

const all_new_heroes=[...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realarray=anotherarray.flat(Infinity);
console.log(realarray);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"})); //interesting case

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
