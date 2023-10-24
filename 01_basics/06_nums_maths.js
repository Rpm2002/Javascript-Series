const score=400
// console.log(score);

const balance= new Number(200);
// console.log(balance);

// console.log(balance.toString().length);  // conversion to string and then finding length of string
// console.log(balance.toFixed(2)); // fix the number of decimals 

const othernumber=132.43;
// console.log(othernumber.toPrecision(3));

const hundreds=10000000;
// console.log(hundreds.toLocaleString('en-IN'));

// ************************** MATHS ***************************

// console.log(Math.abs(-3));
// console.log(Math.round(4.66));
// console.log(Math.ceil(4.2)); // 4.2 => 5
// console.log(Math.floor(4.66));  // 4.66 => 4
// console.log(Math.min(4,1,6,3));
// console.log(Math.max(4,1,6,3));

// console.log(Math.random());
// console.log((Math.random()*10) +1);
// console.log(Math.floor((Math.random()*10) +1));

const min=10;
const max=20;

console.log(Math.floor(Math.random()* (max-min+1)) +min);