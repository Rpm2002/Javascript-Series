// const tinder_user=new Object(); => singleton object
const tinder_user={}; // non-singleton object
// console.log(tinder_user);

tinder_user.name="rhythm";
tinder_user.id="rpm2002";
tinder_user.isloggedin=false;

// console.log(tinder_user);
const regular_user={
    email:"rhythm758002@gmail.com",
    fullname:{
        firstname:"rhythm",
        lastname:"mahale"
    }
}

// console.log(regular_user.fullname);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};

// const obj3=Object.assign({},obj1,obj2);  // objects merge karne ka sahi tarika
// console.log(obj3);

const obj3={...obj1,...obj2}; // spread operator => same array wala concept
// console.log(obj3);

// console.log(tinder_user);

// console.log("keys :",Object.keys(tinder_user));
// console.log("values :",Object.values(tinder_user));
// console.log("Entries :",Object.entries(tinder_user)); // harek key-value pair array ban jayenge


// ********** Object de-structure and JSON API **************

const course={
    coursename:"chai aur javascript",
    price:"999",
    instructor:"Hitesh Choudhary"
}

const{instructor : inst}=course;
// console.log(instructor);
console.log(inst);