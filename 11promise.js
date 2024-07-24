// //Activity 1:
// //Task 1:

let promise = new Promise((resolve, reject)=>{
       setTimeout(()=>{
        resolve("Promise resolved");
       },2000)
       
}).then((res)=>console.log(res))
.catch((e)=>console.log("Error",e.message));

// //Task 2:
let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
     reject("Promise rejected");
     
    },2000)
    
}).then((res)=>console.log(res))
.catch((e)=>console.log("Error:",e));


//Activity 2:
//Task 3:
 let promiseOne = new Promise((res, rej)=>{
    let user = {username:"Javascript", year:1997}
    setTimeout(()=>{
            res(user);
            if(!Response.ok){
                rej("Failed!");
            }
        
    }, 1000);
   
 })

 let promiseTwo = new Promise((res,rej)=>{
    setTimeout(()=>{
       
            res("Data fetched successfully...");
            if(!Response.ok){
                rej("Failed!");
            }
        
    }, 2000);
 })

 let promiseThree = new Promise((res,rej)=>{
    setTimeout(()=>{
        
            res("Thank you!");
            if(!Response.ok){
                rej("Failed!");
            }
        
    }, 2000);
 })

 promiseOne.then((res)=>{
    console.log(res);
    return promiseTwo;
}).then((data)=>{
    console.log(data);
    return promiseThree;
}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("Error", err.message);
}).finally((f)=>{
   console.log("Completed");
});
 

//Activity 3:

async function promiseResolve(){
   return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Promise fulfilled!")
        },2000);

    }) 

}

 async function promiseResolve2(){

    try{
        let response  = await promiseResolve();
        console.log(response);
    }
   catch(err){
    console.log("Error",err.message);
   }
}
promiseResolve2();


//Activity 4:
//Task 5:

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=> {
        if(res.ok === true){
            return res.json()
        } else {
            throw new Error("Error");
        }
        
    }) .then((data)=>console.log(data.title))
    .catch((e)=>console.log("Error", e.message))


//Task 6:
async function fetchApi(){
    try{
         let res= await fetch('https://jsonplaceholder.typicode.com/todos/1');
         console.log(await res.json());

    } catch(e){
        console.log("Error", e.message);
    }
}

fetchApi();

//Activity 5:
//Task 8:
let p1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("Promise 1 resolved");
    },100)
   
});
let p2 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("Promise 2 resolved");
    }, 2000)
    
});

let p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise 3 resolved");
    }, 3000)
})

Promise.all([p1,p2,p3]).then((data)=>{
    console.log(data);
})

//Task 9:
Promise.race([p1,p2,p3]).then((data)=>{
    console.log(data);
})