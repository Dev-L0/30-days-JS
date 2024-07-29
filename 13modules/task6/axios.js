import axios from "axios";

axios.get('https://icanhazdadjoke.com/', { 
    headers: {
    'Accept': 'application/json'
  }})
.then((res)=>{
    console.log(res.data.joke);
}).catch((e)=>{
    console.log("Error", e);
}).finally(()=>{
    console.log("Completed");
})