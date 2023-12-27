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
        super(username);
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

