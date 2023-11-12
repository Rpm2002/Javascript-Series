// for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const val of arr)
{
    //    console.log(val);
}

const greetings='Happy Diwali';

for (const greet of greetings)
{
    if(`${greet}`==' ')
    {
        continue;
        // break;
    }
    // console.log(`Each character is : ${greet}`);   
}

// Maps

const map1=new Map()

map1.set('IN',"India");
map1.set('FR',"France");
map1.set('UK',"United Kingdom");

map1.set('IN',93);

// console.log(map1);

for(const [key,value] of map1) // key aur value alag alag print karvane k liye
{
    console.log(key,' : ',value);
}

const myObject = {  
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {  // objects pe for of loop kaam nhi karta
//     console.log(key, ':-', value);
    
// }