//Activity 1:
//Task 1:

let arr = [1,2,3,4,5];
console.log(arr);

//Task 2:
console.log(`First element of array:${arr[0]}`);
console.log(`Last element of array:${arr[4]}`);

//Ativity 2:
//Task 3:
arr.push(6);
console.log(arr);
//Task 4:
arr.pop(6);
console.log(arr);

//Task 5:
arr.shift(1);
console.log(arr);
//Task 6:
arr.unshift(7);
console.log(arr);

//Activity 3:
//Task 7:
let num = [1,2,3,4,5];
const doubledNum = num.map((n)=>{
    return n*2;
})
console.log(doubledNum);

//Task 8:
const filtered = num.filter((n)=>{
    return n%2===0;
})
console.log(filtered);

//Task 9:
const reducedNum = num.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
})

console.log(reducedNum);


//Activity 4:
//Task 10:
for(i=0; i<num.length; i++){
    console.log(num[i]);
}
console.log("____________________");

//Task 11:
num.forEach((n)=>{
    console.log(n);
})

//Activity 5;
//Task 12:
let heroes = [["Spider-Man", "Iron Man", "Wolverine"],["Batman", "Flash", "Green Arrow"]];
console.log(heroes);

//Task13;
console.log(heroes[0][2]);
console.log(heroes[1][0]);
