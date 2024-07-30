//Activity 1:
//Task 1:

function outer(){
    let a = "Javascript";
    console.log(`Outer ${a}`);

    function inner(){
        console.log(`Inner ${a}`); 
    }
   inner();
}
outer();

//Task 2:
function createCounter(){
    let count = 0;
    return{
        increment(){
             count++;
            console.log(`Count${count}`);
    } ,

    decrement(){
            count--;
            console.log(`Count${count}`);
    },
    getValue(){
        return count;
    }
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue());
console.log(counter.count);


//Activity 2:
//Task 3:

function uniqueId() {
  let id = Math.floor(Math.random()*100)+1;
  return function(){
    id++;
    return id;
  }
}

const idGenerator = uniqueId();

console.log(idGenerator()); // logs a random ID between 1 and 100
console.log(idGenerator()); // logs the next ID (incremented by 1)
console.log(idGenerator()); // logs the next ID (incremented by 1)


//Task 4:
function userName(name){
     return function(){
        return `Hello, ${name}`;
     }
}

const username = userName("Chai");
console.log(username());


//Activity 3:
//Task 5:

function createFunctions(){
    let functions = [];
    for(let i=0; i<5; i++){
      functions.push(function (){
        console.log(i);
      })
    }

    return functions;
}

const arrFuncs = createFunctions();
for(let i =0; i<arrFuncs.length;i++){
    arrFuncs[i]();
}

//Activity 4:
//Task 6:

function createCollection(){
let items = [];

return{
  add(item){
         items.push(item);
  },
  remove(item){
       const index = items.indexOf(item);
       if(index != -1){
        items.splice(index, 1);
       }
  },

  list(){
    return items.slice()
  }
}
}

const collection = createCollection();
collection.add("spiderman");
collection.add("batman");
collection.add("superrman");

console.log(collection.list());
collection.remove("spiderman");
console.log(collection.list());

//Activity 5:
//Task 7:
function memoize(fn){
  const cache = {};
  return function(...args){
    const key = JSON.stringify(args);
    if(cache[key]===undefined){
      cache[key] = fn(...args);
    }
    return cache[key];
  }
}

//Task 8:
function fibonacci(n){
  if(n<= 1) {
    return n;
  } return fibonacci(n-1) + fibonacci(n-2);

}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(5));
console.log(memoizedFibonacci(5));
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));

