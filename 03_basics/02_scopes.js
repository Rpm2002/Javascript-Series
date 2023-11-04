//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

// ****************     HOISTING ***************************

function one() // beta ice-cream papa se khaa sakta hai aur cheen sakta hai par papa bete ka ice-cream nhi kha sakte
{
    const username="Rhythm";

    function two() // inner fucntion can access vakues of outer fucntion but outer fucntion cannot
    {
        const website='Youtube';
        console.log(username);
    }

    // console.log(website);
    // two();
}

// one()

if(true)
{
    const username='Rhythm';

    if(username==='Rhythm')
    {
        const website=' youtube';
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}