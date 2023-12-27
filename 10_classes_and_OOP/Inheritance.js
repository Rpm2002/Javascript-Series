class User{
    constructor(username){
        this.username=username
    }

    LogMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,pwd){
        super(username); // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
        this.email=email;
        this.pwd=pwd
    }

    addCourse(){
        console.log(`A new course has been added ${this.username}`);
    }
}

const chai=new Teacher('Rhythm','chai@gmail.com','fdghf')
chai.addCourse()

console.log(chai instanceof User);

