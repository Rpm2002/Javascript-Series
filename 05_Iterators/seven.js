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

// ******** Difference beyween map and filter

// They both return a new array.
// map returns a new array of elements where you have applied some function on the element
// so that it changes the original element (typically). filter returns a new array of the elements
// of the original array (with no change to the original values). filter will only return elements
// where the function you specify returns a value of true for each element passed to the function.

// So map returns the same number of elements as the original, but the element value will be
// transformed in some way and filter will return the same or less number of elements than the original
// but not change the original elements’ values.