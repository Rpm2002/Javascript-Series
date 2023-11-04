const user={
    username:'Rhythm',
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to my website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username='sam';
// user.welcomeMessage()

// console.log(this);

// function chai()
// {
//     let username='Rhythm'
//     console.log(this.username);     // undefined aayega kyuki functions me nhi sirf objects me chalta hai
// }

// chai();

// const chai= function()
// {
//     let username='Rhythm'
//     console.log(this.username);
// }

// chai();

const chai= ()=>{
    let username='Rhythm'
    console.log(this);
}


// chai();

// const addTwo=(num1,num2)=>{
//     return num1+num2;  curly braces me return keyword likhna hi padega
// }

// const addTwo=(num1,num2)=>  num1+num2;
// const addTwo=(num1,num2)=>  (num1+num2); // implicit return  () parenthesis me return likhne ki zarurat nhi
const addTwo=(num1,num2)=>  ({username:'Rhythm'});
console.log(addTwo(1,2));
