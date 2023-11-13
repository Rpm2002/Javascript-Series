const coding=['js','cpp','ruby','java']

// coding.forEach(function (val){  // callback function me function ka naam nhi likhte
//     console.log(val);
// })

// coding.forEach( (item)=>{
//     console.log(item);
// })

function printMe(item)
{
    // console.log(item);
}

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageFileName);
} )