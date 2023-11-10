// for loop 

for(let i=0;i<=10;i++)
{
    if(i===5)
    {
        // console.log('Element is 5');
    }
    // console.log(i);
}

let myArr=['cat','bat','rat'];

for(let i=0;i<myArr.length;++i)
{
    console.log(myArr[i]);
}

// break and continue

// for (let i = 1; i <=20; i++)
// {
//     if(i==5)
//     {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value i ${i}`);
    
// }

for (let i = 1; i <=20; i++)
{
    if(i==5)
    {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value i ${i}`);
    
}