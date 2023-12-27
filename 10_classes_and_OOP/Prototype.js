// let myName=' Rhythm     '
// let myChannel='Chai    '

// console.log(myName.trueLength); // ham harek string k liye uski true length nikalna chahte hai to 
//  wesa protoype ya method banana hai hame

let myHeros=['Thor','Superman']

let heropower={
    thor:'hammer',
    superman:'arm',

    getPower:function(){
        console.log(`Spidy Power is ${this.superman}`);
    }
}

Object.prototype.rhythm=function(){
    console.log('Rhythm is present in all objects');
}

Array.prototype.heyRhythm=function(){
    // console.log('Rhythm says hello');
}

// heropower.rhythm()
//  Arrays, functions aur strings teeno mein ye prototype wali property chali jayegi agar Object me 
// inject karte hai to
// myHeros.rhythm()
myHeros.heyRhythm()
// heropower.heyRhythm() // isme nhi aayega kyuki hierarchy k hisab se 


// *************** Inheritance Old Method ******************

const user={
    name:'xyz',
    email:'xyz@gmail.com'
}

const Teacher={
    makevideo:true
}

const TeachingSupport={
    isAvailable : true
}

const TASupport={
    makeassignment:'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user

// ********************* Modern Syntax ******************
Object.setPrototypeOf(TeachingSupport,Teacher) // Teacher ki saari properties TeachingSupport me aa jaeygi

let anotherUsername='Rhythm Mahale        '

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
'Raju Japani'.trueLength()