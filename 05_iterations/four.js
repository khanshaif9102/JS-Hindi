const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
//    console.log(key);
//    console.log(myObject[key]);
console.log(`${key} shortcut is for ${myObject[key]}`);
}
console.log("==========================================");

const programming=["js","ruby","java","cpp"];
for (const key in programming) {
    console.log(programming[key]); 
}

console.log("============================================");

const map=new Map();
map.set('IN',"INDIA");
map.set('USA',"UNITED STATE OF AMERICA");
map.set('FR',"FRANCE");

// for (const [key,value] in map) {
//     console.log(`${key} shortcut is for ${value}`);
// }

