//Activity 1:
//Task 1:


function hello(){
    try{
        throw Error("Error occurred....please try again!");
    }
    catch(err){
        console.log( err.message);
    }
}

hello();


//Task 2:

function divide(a,b){
    try{
        if(a||b === 0){
            throw Error("Error division by zero not allowed!");
        }
        let division = a/b;
        console.log(division);
       
    } catch(err){
        console.log("Error:", err.message);
    }
}


divide(2,0);


//Activity 2:
//Task 3:
function hi(){
    try{
        // console.log("hi");
        throw new Error("Error, finally will be executed even when error has been encountered!!!")
    } catch(err){
        console.log(err.message);
    } finally{
        console.log("Task Completed!");
    }
}

hi();


//Activity 3:
//Task 4:
class DbError extends Error{
    constructor(message){
        super(message)
        this.name = "Not found";
    }

}

function connectDB (){
    try{
        let connect = false;
        if(connect === false){
            throw new DbError("Could not connect to database...");
        } else{
            console.log("succesfully connected to database.")
        }
    } catch(err){
        console.log(err.name,':',err.message );
    }
}
connectDB();


//Task 5:

// class ValidateStr extends Error{
//     constructor(message){
//         super(message);
//         this.name = "Empty String";
//         this.code = "000";
//     }
// }
// function validateString(str){
//     try{
//         if(str===""){
//             throw new ValidateStr("Invalid:");
//         }
//     }catch(e){
//         console.log(e.message, e.name);
//     }
// }

// validateString("");


//Activity 5:
//Task 6:
// let promise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//       let randomNumber = Math.floor(Math.random()*10) + 1;
//       if(randomNumber <=5 ){
//         res("Promise Resolved!!!");
//       } else {
//         rej("Promise rejected!!!")
//       }
//     }, 2000)
// }).then((res)=>{console.log(res)}).catch((e)=>console.log(e.message));

// //Task 7:
// async function resRej(){
//    return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         let randomNumber = Math.floor(Math.random()*10) + 1;
//         if(randomNumber <=5 ){
//           res("Promise Resolved!!!");
//         } else {
//           rej("Promise rejected!!!");
//         }
//       }, 2000)
//    })
// }

// async function Random(){
//     try{
//         let response = await resRej();
//         console.log(response);
//     }catch(e){
//         console.log("Error",e.message);
//     }
// }

// Random();


//Activity 5:
//Task 8:
fetch('https://api.chucknorriks.io/jokes/random')
.then((res)=>{
    console.log(res.json());
})
.then((data)=>{
    console.log(data)})
.catch((e)=>{
    console.log("Error:", e.message)});




    //Task 9:

    async function fetchApi(){
        try{
            let response = await fetch('https://api.chucknorriks.io/jokes/random');
            let data = response.json();
            console.log(data);
        } catch(e){
            console.log("ERORRRR:", e.message);
        }
    }
        fetchApi();
    
