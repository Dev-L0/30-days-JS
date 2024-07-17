//Activity 1:
//Task 1:

function oddEven(num){
    if(num%2 === 0){
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

oddEven(6);

//Task 2:
function square(num){
    return num * num;
}

console.log(square(7));

///Activity 2:
//Task 3:
const max = function(a, b){
    if(a > b){
        console.log(a);
    } else {
        console.log(b);
    }
}

max(6,7);

//Task 4:
const concat = function (str1, str2){
return str1 + str2;
}

console.log(concat("Hello ", "World "));

//Activity 3:
//Task 5:
const add = (num1, num2)=>{
 return num1 + num2;
}

console.log(add(6 , 7));


//Task 6:
const match = (str, char)=>{
   if(str.includes(char)){
      return true;
   } else {
      return false;
   }
}

console.log(match("Hello", "p"));


//Activity 4:
//Task 7:
function product(num1, num2 = 7){
   return num1 * num2;
}

console.log(product(6));

//Task 8:
function greeting(name, age = 7){
 return `Morning ${name}, ${age}`;
}

console.log(greeting("Hello, welcome to the show Alex", 67));

//Activity 5:

//Task 9:
function greet(){
    console.log("Hello world!");
}
greet();

function repeat(fn,num){
  for(i=1; i<=num; i++){
    fn();
  }
}

repeat(greet, 5);



//Task 10:


function addition(num){
    return num + num;
}
function mul(num){
    return num * num;
}

function total(num, addition, mul){
    const sum = addition(num);
    const tot = mul(sum);
    return tot;
}

console.log(total(3,addition, mul));