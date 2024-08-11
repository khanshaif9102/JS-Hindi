const name="shaif";
const count=50;
console.log(name+count+" Value");

console.log(`hello my name is ${name} and my repo count is ${count}`);

const name1=new String('shaif');
console.log(name1);

console.log(name1[0]);
console.log(name1.__proto__);
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.charAt(4));
console.log(name1.indexOf('s'));
console.log(name1.substring(1,3));

const name2=name1.slice(-5,4);
console.log(name2);
const newString="  hitesh   ";
console.log(newString);
console.log(newString.trim());

const url="https://shaiflive.me/@shaif%20khan";
//url.replace('%20','-');
//console.log(url.replace(' ',''));
console.log(url.replace('%20','-'));

console.log(url.includes('@'));

const str="hello shaif @ how are-you";
//console.log(url.split('@'));
console.log(str.split(' '));
console.log(str.split('-'));
