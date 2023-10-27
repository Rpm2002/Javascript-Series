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

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mySymbol]);
// console.log(typeof user.mySymbol);
Object.freeze(user);
user.email="dksfkj@ndjfn";

console.log(user);