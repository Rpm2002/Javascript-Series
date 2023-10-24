// Dates

let mydate=new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);
// let mycreateddate=new Date(2023,1,24);
// let mycreateddate=new Date(2023,1,24,4,3);
// console.log(mycreateddate.toDateString());
let mycreateddate=new Date("09-13-2024");  // mm-dd-yyyy
// console.log(mycreateddate.toLocaleString());

let myTimestamp=Date.now();
// console.log(myTimestamp); // ti will give number of milliseconds since 1 January 1970 as per ECMAscript
// console.log(mycreateddate.getTime());  // converts date to ms to compare

// console.log(Math.floor(Date.now()/1000)); // converts to seconds 

let newDate=new Date();

newDate.toLocaleString('default',{
    weekday: "long"
})

