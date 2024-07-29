//Activity 1:
//Task 1:

class Person{
    constructor(name, age){
         this.name = name;
         this.age = age;
    }
    
  greeting() {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
  }
//Task 2:
updateAge(newAge){
    this.age = newAge;
    console.log(`${this.name}'s age has been updated to ${newAge}`);
  }

 

}


const person1 = new Person("Alex", "6");
console.log(person1);


person1.updateAge("7");


//Activity 2:
//Task 3:
class Student extends Person{
    static count = 0;
    constructor(name, age, studentId){
        super(name, age);
        this.id = studentId;
        Student.count++;

    }

    showStudentId(){
          console.log(`${this.name}'s student ID is ${this.id}`);
    }
//Task 4:
    greeting(){
        console.log(`${this.name}'s student ID is ${this.id}`);
    }
}

const student1 = new Student("Jack", "6", "129393");
console.log(student1);
student1.showStudentId();


person1.greeting();
student1.greeting();


//Activity 3:
//Task 5:
class Car{
    constructor(brand){
        this.brand = brand;
    }
    static hello(){
        console.log(`Hello`);
    }
}

const car1 = new Car("Ford");
console.log(car1);
//car1.hello();//error
Car.hello(); //static methods are called on class and throws error when called on object.


//Task 6:

console.log(`Initial count of Student ${Student.count}`);
const student2 = new Student("MAx", "6", "12293");
const student3 = new Student("Lola", "6", "12983");
console.log(`Count of Student: ${Student.count}`);


//Activity 4:
//Task 7

class Persons{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        console.log(`Full name is ${this.firstName}  ${this.lastName}`);
        return `${this.firstName} ${this.lastName}`;
    }
   set fullName(fullName){
    const [firstName, lastName]= fullName.split(" ");
         this.firstName = firstName;
         this.lastName = lastName;
   }

}

const persons1 = new Persons ("Brendan", "Eich");
console.log(persons1);
console.log(persons1.fullName);
//Task 8:
persons1.fullName= "Hala Turk";
console.log(persons1.fullName);

//Activity5:
class Account{
    #balance;
    constructor(balance){
        this.#balance = balance;
    }

    #deposit(amount){
       if(amount > 0){
        this.#balance += amount;
        console.log(`DEposited ${amount}.New balance ${this.#balance}`);
       } else {
        console.log(`Invalid deposit amount.`)
       }
    }

    #withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
         this.#balance -= amount;
         console.log(`Withdrew ${amount}.New balance ${this.#balance}`);
        } else {
         console.log(`Invalid withdrawal amount.`)
        }
     }

     getBalance(){
        return this.#balance;
     }


     performTransaction(type, amount){
        if(type === 'deposit'){
            this.#deposit(amount);

        } else if (type === 'withdrawal'){
            this.#withdraw(amount);
        } else {
            console.log(`Invalid transaction type`);
        }
     }
}



const account = new Account(1000);
account.performTransaction('deposit', 1000);
console.log(account.getBalance());
account.performTransaction('withdrawal', 100);
console.log(account.getBalance());
