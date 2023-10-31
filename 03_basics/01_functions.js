function name()
{
    console.log('R');
    console.log('H');
    console.log('Y');
    console.log('T');
    console.log('H');
    console.log('M');
}

// name();

// function add(a,b)
// {
//     console.log(a+b);
// }

function add(a,b)
{
    let result=a+b;
    return result;
}


const add_result=add(30,5);
// console.log("Result : ",add_result);

function login(username='Sam')
{
    if(username===undefined)
    {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(login("Rhythm"));
// console.log(login());

// function calculatecartprice(...num1)
// {
//     return num1;
// }

function calculatecartprice(val1,val2,...num1)
{
    return num1;
}

// console.log(calculatecartprice(400,300,500));  // returns array => [400,300,500]
// console.log(calculatecartprice(2,4,9,5));

const user={
    username:'Rhythm',
    price:199
}

function handleobject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user);

handleobject({
    username:'Sam',
    price:279
})

// const array=[1,2,3,4];

function getarrayvalue(getarray)
{
    console.log(getarray[1]);
}

// console.log(array);
console.log([1,2,34,4]);