const name="rhythm";
const count=50;

// console.log(name + count + "value");

console.log(`Hello my name is ${name} and my count is ${count}`); // string interpolation modern way

const game=new String("rhythm");
// console.log(game[0]);
// console.log(game.__proto__);

// console.log(game.length);
// console.log(game.toUpperCase());

console.log(game.charAt(2));
console.log(game.indexOf('y'));

const str1="mahale";

const newstr=str1.substring(0,4); // in substring you cant give negative values
// console.log(newstr);

const newstr1=str1.slice(0,-4);
// console.log(newstr1);

const str2="  raju japani   ";
// console.log(str2);
// console.log(str2.trim());// removes extraspaces

const url="http://rhythm.com/rhythm%20mahale";
console.log(url.replace("%20",'-node Js_basics/05_strings.js'));

