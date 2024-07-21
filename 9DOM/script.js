//Activity 1:
//Task 1:
const h1 = document.querySelector('#h1');
h1.textContent = 'I love Javascript!';
console.log(h1);

//Task 2:
const head = document.querySelector('.head');
head.style.backgroundColor = 'red';

//Activity 2:
//Task 3:

const div = document.createElement("div");
div.innerText = "This is a div";
document.body.appendChild(div);

//Task 4:
const list = document.querySelector('.list');
const li = document.createElement('li');
li.innerText = "C#";
list.appendChild(li);

//Activity 3:
//Task 5:
div.remove();

//Task 6:
list.removeChild(list.lastChild);

//Activity 5:
//Task 7:
const img = document.querySelector('img');
img.setAttribute('src','L.jpg');

//Task 8:
let p = document.querySelector('#p');

function myFunc(){
    p.classList.toggle('purple');
}

//Activity6:
//Task 9:
const para = document.querySelector('.para');
const btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    para.innerText = `Hello, world! Welcome to DOM MANIPULATION`;
})
//Task 10:
const div2 = document.querySelector('.div2');
div2.addEventListener('mouseover', ()=>{
    div2.style.borderColor= "red"
})