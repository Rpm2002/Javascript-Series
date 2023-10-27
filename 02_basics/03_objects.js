// objects

// objects.create() => singleton

// literals

const mySymbol=Symbol("key1");

const user={
    name:"Rhythm",
    "full name":"Rhythm Mahale",
    [mySymbol]:"mykey1",
    age:21,
    location:"Ahmedabad",
    email:"rhythm758002@gmail.com",
    isLoggedin:false
}

console.log(user.email);  // . se access kar sakte ho ya [] bhi
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mySymbol]);
// console.log(typeof user.mySymbol);
// Object.freeze(user);  // freeze karne k baad koi bhi changes kaam nhi karenge
user.email="dksfkj@ndjfn";

console.log(user);

user.greeting=function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(user.greeting());