function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username)
    SetUsername.call(this, username) // this hamara current execution context kisi aur fn ko pass
    //  kar deta hai par fir ye code k saath example leke samjhana
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);