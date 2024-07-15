//Activity 1 : if-else
//Task 1:
const prompt=require("prompt-sync")({sigint:true}); 

let num = parseInt(prompt("Enter a number"));
if(num > 0){
    console.log("Number is positive");
} else if(num === 0){
    console.log("Number is zero");
} else {
    console.log("Number is negative");
}

//Task 2:
let age = parseInt(prompt("Enter your age"));
if(age >= 18){
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// //Activity 2: Nested if-else
// //Task3:
let num1 = parseInt(prompt("Enter a number"));
let num2 = parseInt(prompt("Enter a number"));
let num3 = parseInt(prompt("Enter a number"));
if(num1 > num2){
    if(num1 > num3){
        console.log(`${num1} is greater than ${num2} and ${num3}`);
    } else if(num3 > num2) {
        console.log(`${num3} is greater than ${num2} and ${num3}`);
    }
} else if(num2 > num1) {
    if(num2 > num3){
    console.log(`${num2} is greater than ${num1} and ${num3}`);
    } else if(num3 > num1){
        console.log(`${num3} is greater tha ${num2} and ${num1}`);
    } 
    }
    


//Activity 3: Switch Case

let day = parseInt(prompt("Enter a number for day from 1-7"));
switch(day){
    case 1: console.log("Monday");
    break;

    case 2: console.log("Tuesday");
    break;

    case 3: console.log("Wednesday");
    break;

    case 4: console.log("Thursday");
    break;

    case 5: console.log("Friday");
    break;

    case 6: console.log("Saturday");
    break; 

    case 7: console.log("Sunday");
    break; 

    default: "Enter a valid number"
}

//Task 5:
let grade = prompt("Enter your grade A,B,C,D,F");
switch(grade.toUpperCase()){
    case "A": console.log("Excellent");
    break;

    case "B": console.log("Very good");
    break;

    case "C": console.log("Can do better");
    break;

    case "D": console.log("Work hard");
    break;

    case "F": console.log("Fail");
    break;


    default: console.log("Enter a valid grade");
}


//Activity 4:
//Task 6:
let number = parseInt(prompt("Enter a number"));
if (number%2 == 0 ? console.log("Even") : console.log("Odd"));

//Activity 5:Combining Conditions
//Task 7:

let year = parseInt(prompt("Enter a year"));
if((year%4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
   console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}
