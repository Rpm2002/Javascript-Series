// let score="33";
// let score="33abc"
// let score=null;
// let score=undefined;

// console.log(typeof(score));
// console.log(typeof score);

// let valueinnumber=Number(score);  // Type conversion to number 
// console.log(typeof (valueinnumber));
// console.log(valueinnumber);

// "33" => 33
// "33abc"=> NaN
// true => 1;  false=>0

// let islogged="Rhythm";
// let islogged="";
let islogged=1;
let boolislogged=Boolean(islogged);
// console.log(boolislogged);

/*
1=> true
"" => false
"rhythm"=> true

*/

// ************************************** OPERATIONS ****************************************
let str1="hello";
let str2=" world";

let str3=str1+str2;

// console.log(str3);

// console.log(1 + "2");  // 12   These are all ouputs according to the rule of ECMA script
// console.log("1" + "2");  // 12
// console.log("1" + 2 + 2);// 122
// console.log(1 + 2+ "2"); // 32

console.log("2" > 1);  // true
console.log("02" >1);  // true

console.log(null>0);  //false
console.log(null==0); //false
console.log(null>=0); // true

/* The reason is that an equality check == and comparisions < < >= <=  work differntly
   Comparision converts null to a number, trating it as 0
   Therefore null>=0 is true and  null>0 is false

*/

console.log(2===2)  // it checks if both datatypes are same or not and does not perform type conversion



