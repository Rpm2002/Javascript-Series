const account_id=1343;
let accountemail="rhythm758002@gmail.com";
var accountpwd="12345";
acountcity="Jaipur";

// account_id=123;  const variable caanot be changed => not allowed

accountemail="dfjhj@ndjfn";
accountpwd="12";
acountcity="Ahmedabad";
let accounstate;

console.table([account_id,accountemail,accountpwd,acountcity]);

// Dont use var and use let only because of the issues of functional scope and block scope

/* 
function varAndLetScoping() {
  var x = 1;

  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 1
}

variables declared by let are only available inside the block where they’re defined.
Variables declared by var are available throughout the function in which they’re declared.
*/