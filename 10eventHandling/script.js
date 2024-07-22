//Activity 1:
//Task 1:
document.addEventListener("DOMContentLoaded", (event) => {
const btn1 = document.querySelector('.btn1');
const para1 =document.querySelector('.para1');


btn1.addEventListener('click', ()=>{
    para1.textContent = `JavaScript was invented by Brendan Eich in 1995. It was developed for Netscape 2, and became the ECMA-262 standard in 1997. After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser. `
});

//Task 2:
const img1 = document.querySelector('.img1');
const toggle = document.querySelector('.toggle');
    toggle.addEventListener('dblclick',()=>{
        img1.classList.toggle('n');
    });


    //Activity 2:
    //Task 3:
    const div3 = document.querySelector('.div3');
    const mouseEvent = ()=>{
        div3.addEventListener('mouseover', ()=>{
            div3.style.backgroundColor = 'blue';
        })  

   //Task 4:
        div3.addEventListener('mouseout', ()=>{
            div3.style.backgroundColor = 'black';
        })
    
    }

    mouseEvent();
    

    //Activity 3:
    ;

    const keyevents = () => {
        //Task 5:
    const input = document.querySelector('#inp')
        input.addEventListener('keydown', (e)=>{
            console.log(e.key);
        });


          //Task 6:
          input.addEventListener('keyup', (e)=>{
            console.log(input.value);
        });
    }
   
    keyevents();


    //Activity 4:
//Task 7:
const form = document.querySelector('.contact-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(name.value);
    console.log(email.value);
})

//Task 8:
const select = document.querySelector('select');
const para2 = document.querySelector('.para2');
select.addEventListener('change', (e)=>{
    console.log(e.target.value)
   para2.textContent = e.target.value;
})
  
//Activity 5:
//Task 9:
const list = document.getElementById('list');

list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log('Clicked on:', event.target.textContent);
  }

  //Task 10:
  const parent = document.querySelector('.parent');
  const child = document.createElement('child');
    child.textContent = 'child';
    parent.append(child);
   
 parent.addEventListener('click', ()=>{
    console.log("bubbling");
 })
 child.addEventListener('click', ()=>{
    console.log("child");
 })


});
   
});