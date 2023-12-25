const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// New keyword constructor function hai jo har baar hame new instance deta hai taki code mess up naa ho jaye

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

            //    **************** New Keyword likhte hi kya hota hai **************                        
           
// => Pehle to 1 empty object create hota hai jise instance bolte hai
// => Fir constructor function call hota hai new keyword k karan jo saare arguments ek sath 
// pack karke aapko de deta hai        
// => Fir this keyword k andar sab inject ho jaata hai aur aapko sab object k andar ki cheeze mil jaati hai