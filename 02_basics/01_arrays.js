// arrays in JS

const myarr=[1,2,3,4,5];
const heroes=['shaktiman','batman'];

// const arr=new Array(1,2,3);  another method of declaration
// console.log(myarr);
// console.log(heroes[1]);

// ******************** Array Methods *************

// myarr.push(6);
// console.log(myarr);
// myarr.pop(2);
// console.log(myarr);


// myarr.unshift(10);  // puts the values at the start of array
// console.log(myarr);
// myarr.shift();
// console.log(myarr);
// console.log(myarr);
// console.log(myarr.includes(19));
// console.log(myarr.indexOf(7));

// const newarr=myarr.join(); // converts arrays into string format
// console.log(myarr);
// console.log(newarr);

console.log('A',myarr);

const myn1=myarr.slice(1,3); // slice me last index count me nhi hoti
console.log(myn1);

console.log('B',myarr);

const myn2=myarr.splice(1,3);
console.log('C',myarr); // splice karne k baad jo bacha hua hoga wo print hoga [1,5]
console.log(myn2);// konse elements splice hue wo print hua [2,3,4]
