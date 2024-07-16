// //Activity 1: //for loop
// //Task 1: 

for(i=1; i<=10; i++){
    console.log(i);
}

// //Task 2:
console.log("Table    5");
for(i=0; i<=10; i++){
    console.log(i,"X",(i*5)) 
}

// //Activity 2: //while loop
// //Task 3:
let n=1;
let sum=0;
while(n<=10){
    sum= sum + n;
    n++;
}
console.log(sum);

// //Task 4:

let num = 1;
while(num <= 10){
    console.log(num);
    num++;
}


// //Activity 3: //do while loop
// //Task 5:
let number = 1;
do{
    console.log(number);
    number ++;
}  while(number <= 5);


//Task 6:
let fact =1;
let a = 7;
let b = 1;

do{
    fact = fact * b;
    b++; 
}while(b<a)
console.log(fact);

// Activity 4: // nested loops
//Task 7:

let stars = "";
for(i=0;i<=4;i++){
    for(j=i; j<=i; j++){
        stars+="*";
        console.log(stars);
    }
}

//Acivity 5:
//Task 8:
for(i=1;i<=10;i++){
    if(i === 5){
        continue;  
    }
   console.log(i);
}

//Task 8:
for(i=1;i<=10;i++){
    if(i === 7){
        break;  
    }
   console.log(i);   
}


