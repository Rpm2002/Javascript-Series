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

