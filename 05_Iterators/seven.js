const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.map( (num)=>{ return num+10})
// console.log(newNums);

// const newNums=myNums.map( (num)=> num*10)
//                     .map( (num)=>num+1 )
                    // .filter( (num)=>num >50 )  // inko chaining kehte hai


const newNums=myNums.map( (num)=> num*10).map( (num)=>num+1 )                   

console.log(newNums);                

// The .map() method executes a callback function on each element in an array. 
// It returns a new array made up of the return values from the callback function.
// The original array does not get altered, and the returned array may contain different 
// elements than the original array.