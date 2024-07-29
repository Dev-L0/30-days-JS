// multiimp.js
let lang1 = 'Javascript';
let lang2 = 'Python';
let lang3 = 'Java';

const hello = ()=>{
    console.log(`Hello World!, ${lang1}`);
}
const fun = ()=>{
    console.log(`Have fun! ${lang2}`);
}
const bye = ()=>{
    console.log(`Bye World! ${lang3}`);
}

export  { lang1, lang2, lang3, hello, fun, bye };
