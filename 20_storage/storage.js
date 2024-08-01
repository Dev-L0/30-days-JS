//Activity 1:
//Task 1:
const h1 = document.querySelector("h1");

let string = "Hello world!";
localStorage.setItem("string", string);

let saved = localStorage.getItem("string");

h1.innerText = `${saved}`;

//Task 2:
const h2 = document.querySelector("h2");
const obj =({
    language : "Javascript",
    year: "1997"

})

localStorage.setItem("obj", JSON.stringify(obj));
const getObj = localStorage.getItem("obj");
const saved2 = JSON.parse(getObj);
h2.innerText = `Language: ${saved2.language} Year:${saved2.year}`;


//Activity 2:
//Task 3:
const form1 = document.querySelector("#form1");
const name1 = document.querySelector('#name1');
const email1 = document.querySelector('#email1');

const p = document.querySelector('p');
document.addEventListener('DOMContentLoaded',()=>{
    const storedData = localStorage.getItem('formData');
    if(storedData){
        const data = JSON.parse(storedData)
        p.innerText = `${data.name}, ${data.email}`
    }
    
form1.addEventListener(('submit'),(e)=>{
    e.preventDefault();

    let formData = {
        name1: name1.value,
        email1: email1.value,
    };
    console.log(formData);

     localStorage.setItem('formData', JSON.stringify(formData));
    
    p.innerText = `${formData.name1}, ${formData.email1}`;
    form1.reset();

    
})


})

//Task 4:
let str = "Hello world!"
const setStr = localStorage.setItem("str", str);
console.log(localStorage.getItem('str'));
console.log(localStorage.removeItem('str'));
console.log(localStorage.getItem('str'));


//Activity 3:
//Task 5:

sessionStorage.setItem('username', 'Javascript');
console.log(sessionStorage.getItem('username'));
sessionStorage.removeItem("username");
console.log(sessionStorage.getItem('username'));


//Task 6:
const obj2 = ({
    language : "Javascript",
    Founder : "Brendan Eich"
})

 sessionStorage.setItem('obj2', JSON.stringify(obj2));

const storedObj2 = sessionStorage.getItem('obj2');

const pStoredData = JSON.parse(storedObj2);
console.log(pStoredData.Founder, pStoredData.language);


//Activity 4:

//Task 7:
const form2 = document.querySelector("#form2");
const name2 = document.querySelector('#name2');
const email2 = document.querySelector('#email2');

const p2 = document.querySelector('#p2');

    
form2.addEventListener(('submit'),(e)=>{
    e.preventDefault();

    let formData = {
        name2: name2.value,
        email2: email2.value,
    };
    console.log(formData);

     sessionStorage.setItem('formData', JSON.stringify(formData));
    
    p2.innerText = `${formData.name2}, ${formData.email2}`;
    form2.reset();

    
})




//Task 8:
let str2 = "Hello world!"
const setStr2 = sessionStorage.setItem("str2", str2);
console.log(sessionStorage.getItem('str2'));
console.log(sessionStorage.removeItem('str2'));
console.log(sessionStorage.getItem('str2'));


//Activity 5:
//Task 9:
let local = "This is Local Storage.";
let session = "This is Session Storage";

localStorage.setItem("local", local);
sessionStorage.setItem("session", session);

let getLocal = localStorage.getItem('local');
let getSession = sessionStorage.getItem('session');

console.log(getLocal);
console.log(getSession);

//Task 10:

function clearStorage() {
    localStorage.clear();
    sessionStorage.clear();
  }

  clearStorage();