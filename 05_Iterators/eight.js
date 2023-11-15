const myNums=[1,2,3]

// const myTotal=myNums.reduce( function (acc,currval){
//     console.log(`accumulator : ${acc} and currentvalue : ${currval}`);
//     return acc+currval; // acc+currval jo hai wo accumulator me jayegi
// },0) // 0 matlab yaha pe accumulator ki initial value hai 

const myTotal=myNums.reduce( (acc,currval)=> acc+currval,0)

// console.log(myTotal);

const shoppingCart=[
    {
        item:'JS Course',
        price:999
    },

    {
        item:'C++ Course',
        price:1999
    },

    {
        item:'Python Course',
        price:12999
    },
]

const answer=shoppingCart.reduce( (acc,item)=> acc+item.price,0) // yaha pe item matlab harek object hai array k andar

console.log(answer);

// The .reduce() method iterates through an array and returns a single value.
// It takes a callback function with two parameters (accumulator, currentValue) as arguments.
// On each iteration, accumulator is the value returned by the last iteration, and the currentValue
// is the current element. Optionally, a second argument can be passed which acts as
// the initial value of the accumulator.