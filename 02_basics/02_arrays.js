const marvel=['spiderman','thor','ironman'];
const dc=['batman','superman','flash'];

// marvel.push(dc);  isse pura jo dc wala array hai wo 4th element ban jayega
// console.log(marvel);

// console.log(marvel[3][0]);

// const new_arr=marvel.concat(dc);
// console.log(new_arr);

// const all_heros=[...marvel,...dc]; // spread operator (...)  is the syntax
// console.log(all_heros);

// const arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const real_arr=arr.flat(Infinity); // khud hi puree array ko flat out ya individual elements me baat dega
// console.log(real_arr);

// console.log(Array.isArray("Rhythm")); // true or false
// console.log(Array.from("Rhythm"));  // array me convert karega
// console.log(Array.from({name: "Rhythm"})); // interesting case -> gives empty arrays

let score1=10;
let score2=20;
let score3=30;

console.log(Array.of(score1,score2,score3));