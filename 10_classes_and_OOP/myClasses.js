// ES-6

// The constructor method is a special method of a class for creating and 
// initializing an object instance of that class
// A class cannot have more than one constructor method.

// class User{
//     constructor(username,email,password){ 
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }

//     encryptPwd(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai=new User('Rpm','xyz@hotmail.com','jdbfj')
// console.log(chai.encryptPwd());
// console.log(chai.changeUsername());

//  Behind the scenes

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password
}

User.prototype.encryptPwd=function(){
    return `${this.password}abc`
}

User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const tea=new User('Apm','tea@hotmail.com','edhfd')
console.log(tea.encryptPwd());
console.log(tea.changeUsername());