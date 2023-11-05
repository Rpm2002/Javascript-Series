// Immediately Invoked Function Execution

// function chai()
// {
//     console.log(`DB Connected`);
// }

// chai();

(function chai()
{
    console.log(`DB Connected`);
}) ();  // to stop th econtext you have to compulsarily write ; 

// global scope k pollution se problem hoti hai kai baar so to remove that pollution, we use IIFE

// ()() first parenthesis for function defintion and 2nd for execution call

( ()=>{
    console.log(`DB 2 connected`);
}) ();


// ( function chai(){
       // named IIFE
//     console.log(`DB 2 connected`);
// }) ();

( (name)=>{
    console.log(`DB 3 connected ${name}`);
}) ('Rhythm')