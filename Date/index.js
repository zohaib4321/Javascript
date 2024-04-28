
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2007, 9, 26)
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let newDate = new Date(2004, 5, 1)
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString("default", {
    weekday: "long"
})