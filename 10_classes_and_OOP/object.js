function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power=2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username,score)
{
    this.username=username; // right side me parameters wala username hai
    this.score=score;
}

createUser.prototype.increment=function(){
    console.log(this.score++);
}

createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}

const chai=new createUser('chai',25)
const tea=createUser('tea',23)

chai.printMe()
chai.increment()