//Activity 1:
//Task 1:


const regex = /javascript/g;
const str = "javascript is fascinating";

console.log(str.match(regex));


//Task 2:

const regex2 = /\d+/g;
const str2 = "He was born on the 7th.";

console.log(str2.match(regex2));

//Activity 2:
//Task 3:
const regex3 = /^[A-Z]/;
let str3 = ["Javascript", "java", "pyThon"];
str3.forEach((el)=>{
    console.log(el.match(regex3));
})


//Task 4:
const regex4 = /\d+/;
let str4 = ["676767bhfggf", "767676","hj76nj", "kdmksd"];
str4.forEach((el)=>{
    console.log(el.match(regex4));
})


//Activity 3:
//Task 5:
const regex5 = /^([2-9][0-8][0-9])[0-9]{3}[0-9]{4}$/;
let numbers = ["(123)456-7890", "9278495609"];
numbers.forEach((num)=>{
    console.log(regex5.test(num));
})

//Task 6:
const regex6 =/^([^@]+)@([^@]+)$/;
let email = "chai@gmail.com";

const username = email.match(regex6);
console.log("Username:", username[1]);
console.log("Domain:", username[2]);

//Activity 4:
//Task 7:
const regex7 = /^hello/;
let arr = ["hello world 6767!", "7676hello world", "hello"];
arr.forEach((el)=>{
    console.log(el.match(regex7), regex7.test(el));
})

//Task 8:
const regex9 = /bye$/;
let arr2 = ["bye", "javascript is amazing, bye", "Bye, have fun"];
arr2.forEach((el)=>{
    console.log(el.match(regex9),"--->" ,regex9.test(el));
})

//Activity 5:
//Task 9:
const regex10 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;
let password = "Javascript_76";
if(password.match(regex10)){
    console.log("Valid password");
} else {
    console.log("Invalid password");
}
//console.log(regex10.test(password));

//Task 10:
const regexUrl = /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]*[-A-Za-z0-9+&@#/%=~_|]$/;
let url= "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2";

if(url.match(regexUrl)){
    console.log("Valid URL")
} else {
    console.log("Invalid Url");
}