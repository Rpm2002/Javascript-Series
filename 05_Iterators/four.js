const myobject={
    js:'Javascript',
    cpp:'c++',
    rb:'ruby'
}

for (const key in myobject) 
{
    // console.log(`${key} is shortcut for ${myobject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }