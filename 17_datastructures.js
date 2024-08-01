//Activity 1:
//Task 1:

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next=null;
//     }
// }

// let node1 = new Node(1);
// let node2 = new Node(2);

// //node1.next = node2;
// console.log(node1, node2);


//Task2:
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }

//     add(value){
//         const newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = new Node;
//         }
//     }
//         removeLast(){
//             if(!this.head) return;
//             if(!this.head.next){
//                 this.head = null;
//                 this.tail = null;
//             } else {
//                 let currentNode = this.head;
//                 while(currentNode.next.next){
//                     currentNode = currentNode.next;
//                 }
//                 currentNode.next = null;
//                 this.tail = currentNode;
//             }
//         }
//             display(){
//                 let currentNode = this.head;
//                 while(currentNode){
//                     console.log(currentNode.value);
//                     currentNode = currentNode.next;
//                 }
//             }
//         }
    

//         const list = new LinkedList();

// list.add(6);
// list.add(7);
// list.add(96);

// list.display(); 

// list.removeLast();

// list.display(); 
// list.display(); 


//Activity2:
//Task 3:
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//     }

//     push(value) {
//         const newNode = new Node(value);
//         newNode.next = this.top;
//         this.top = newNode;
//     }

//     pop() {
//         if (!this.top) return null;
//         const value = this.top.value;
//         this.top = this.top.next;
//         return value;
//     }

//     peek() {
//         return this.top ? this.top.value : null;
//     }
// }

// const stack = new Stack();

// stack.push(6);
// stack.push(7);
// stack.push(96);

// console.log(stack.peek());

// console.log(stack.pop()); 
// console.log(stack.pop()); 


// console.log(stack.peek()); 


//Task 4:
// function reverseString(str){
//     const stack = new Stack();
//     const reversedStr = [];

//     for(let i=0; i<str.length; i++){
//      stack.push(str[i]);
//     }


//     while(stack.top){
//         reversedStr.push(stack.pop());
//     }

//     return reversedStr.join("");
// }


// const originalStr = "Hello";
// const reverseStr = reverseString(originalStr);
// console.log(reverseStr);


//Activity 3:
//Task 5:
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.front = null;
//         this.rear = null;
//     }

//     enqueue(value) {
//         const newNode = new Node(value);
//         if (!this.rear) {
//             this.front = newNode;
//             this.rear = newNode;
//         } else {
//             this.rear.next = newNode;
//             this.rear = newNode;
//         }
//     }

//     dequeue() {
//         if (!this.front) return null;

//         const value = this.front.value;
//         this.front = this.front.next;

//         if (!this.front) {
//             this.rear = null;
//         }

//         return value;
//     }

//     front() { 
//         return this.front ? this.front.value : null;
//     }
// }

// const queue = new Queue;

// queue.enqueue(6);
// queue.enqueue(7);

// console.log(queue.front); 

// console.log(queue.dequeue()); 
// console.log(queue.front); 



//Task 6:
// class Node {
//     constructor(job) {
//         this.job = job;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.front = null;
//         this.rear = null;
//     }

//     enqueue(job) {
//         const newNode = new Node(job);
//         if (!this.rear) {
//             this.front = newNode;
//             this.rear = newNode;
//         } else {
//             this.rear.next = newNode;
//             this.rear = newNode;
//         }
//     }

//     dequeue() {
//         if (!this.front) return null;

//         const job = this.front.job;
//         this.front = this.front.next;

//         if (!this.front) {
//             this.rear = null;
//         }

//         return job;
//     }

//     front() {
//         return this.front ? this.front.job : null;
//     }

//     isEmpty() {
//         return this.front === null;
//     }
// }

// class Printer {
//     constructor() {
//         this.queue = new Queue();
//     }

//     printJob(job) {
//         console.log(`Printing job: ${job}`);
//     }

//     addJobToQueue(job) {
//         this.queue.enqueue(job);
//         console.log(`Job added to queue: ${job}`);
//     }

//     processQueue() {
//         while (!this.queue.isEmpty()) {
//             const job = this.queue.dequeue();
//             this.printJob(job);
//         }
//     }
// }

// const printer = new Printer();

// printer.addJobToQueue("Document 1");
// printer.addJobToQueue("Document 2");
// printer.addJobToQueue("Image 1");
// printer.addJobToQueue("Document 3");

// printer.processQueue();



//Activity 4:
//Task 7:

class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(1);
console.log(root.left = new TreeNode(6));
console.log(root.right = new TreeNode(7));
console.log(root.left.left = new TreeNode(96));
console.log(root.left.right = new TreeNode(97));



//Task 8:
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        this._insertRecursive(this.root, newNode);
      }
    }
  
    _insertRecursive(currentNode, newNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
        } else {
          this._insertRecursive(currentNode.left, newNode);
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
        } else {
          this._insertRecursive(currentNode.right, newNode);
        }
      }
    }
  
    inOrderTraversal() {
      if (!this.root) {
        return;
      }
      this._inOrderTraversalRecursive(this.root);
    }
  
    _inOrderTraversalRecursive(currentNode) {
      if (currentNode) {
        this._inOrderTraversalRecursive(currentNode.left);
        console.log(currentNode.value);
        this._inOrderTraversalRecursive(currentNode.right);
      }
    }
  }
  
 
  const tree = new BinaryTree();
  tree.insert(6);
  tree.insert(7);
  tree.insert(8);
  tree.insert(1);
  tree.insert(3);
  
  tree.inOrderTraversal();
  

