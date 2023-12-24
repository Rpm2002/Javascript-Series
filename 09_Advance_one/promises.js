/* The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
A Promise is a proxy for a value not necessarily known when the promise is created.
It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
This lets asynchronous methods return values like synchronous methods: instead of immediately 
returning the final value, the asynchronous method returns a promise to supply the value at some point 
in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.  

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png
Flowchart of Promise                         */

const promiseOne=new Promise(function(resolve,reject){
    // Do any async task like DB-calls, Cryptography and Networking
    setTimeout(function(){
        console.log('Async Task is completed');
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log('Promise consumed');
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Async task 2 completed');
})



const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'chai', email: 'xyz@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user); // user me saara resolve ka data aa jayega
})



const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error)
        {
            resolve({username:'Rhythm',email:'abc@hotmail.com'})
        }
        else
        {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

const username=promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>console.log('Promise is either resolved or rejected'))


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error)
        {
            resolve({username:'Javascript',pwd:'123'})
        }
        else
        {
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumepromisFive(){
    try
    {
        const response=await promiseFive;
        console.log(response); 
    } catch (error) {
        console.log(error);
    }
}

consumepromisFive();


// async function getAllusers(){
//     try
//     {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ',error);
//     }
// }

// getAllusers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})