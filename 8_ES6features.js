//Activity 1:
//Task 1:
let name = "Alex";
let age = 1;

console.log(`${name} is ${age} years old`);

//Task 2:
console.log(`ECMAScript 2015 was the second major revision to JavaScript.
ECMAScript 2015 is also known as ES6 and ECMAScript 6.
This chapter describes the most important features of ES6.`);


//Activity 2:
//Task 3:
const nums = [1,2,3,4];
const [first, second] = nums;
console.log(first, second);

//Task 4:
const book = ({
    title: "Javascript",
    author: "Brendan Eich",
    year:"1997",
})

const {title, author} = book;
console.log(title, author);




//Activity 3:
//Task 5:
const arr = [1,2,3,4,5,6];
console.log(arr);
const arr2 = [...arr, 7,8,9,10];
console.log(arr2);

//Task 6:
function add(...numbers){
    let sum =0;
numbers.forEach((number)=>{
    sum += number;
    
})
return sum; 

}

console.log("Sum is",add(1,2,3,4));


//Activity 4:
//Task 7:

function mul(a, b=1){
    console.log(a * b);
}

mul(3*2);
mul(7);


//Activity 5:
//Task 8:
const obj = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(obj);

//Task 9:
let i=0;
const computedProperty = {
    [`hello${++i}`] :i,
    [`hello${++i}`] :i,
    [`hello${++i}`] :i,

}

console.log(computedProperty.hello1);
console.log(computedProperty.hello2);
console.log(computedProperty.hello3);



