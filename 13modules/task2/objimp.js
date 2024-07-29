let person = ({
    firstname : "Javascript",
    year: "1997",

    greet: function (){
        console.log(`Hello, ${this.firstname}.`);
    }
})

export {person};