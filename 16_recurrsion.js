//Activity 1;
//Task 1:


function fact(n){
    if(n === 0){
        return 1;
    } else {
        return n* fact(n-1);
    }
}

console.log(fact(6));

console.log(fact(7));


//Task 2:
function fibonacci(n){
    if(n<=1){
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(7));

//Activity 2:
// Task 3:
let arr = [1,2,3,4,5,6,7];


function sumArr(arr, index=0, sum=0){
    if(index >= arr.length){
        console.log(sum);
        return;
    } else {
        sum += arr[index];
        sumArr(arr, index +1, sum)
        }
}

sumArr(arr);

//Task 4:
let b =[1,2,3,4,7,6,5];
function findmax(arr, index=0, max=0){
    if(index >= arr.length){
        console.log(max);
        return;
    } else if (arr[index]>max){
        max= arr[index];
    }
    findmax(arr, index+1, max);
}

findmax(b);


//Activity 3:
//Task 5:

function reversed(str, reversedStr=""){
    if(str.length === 0){
        console.log(reversedStr);
        return;
    } else {
        reversedStr += str[str.length-1];
        reversed(str.slice(0,-1), reversedStr);
    }
}

let str = "Javascript";
reversed(str);


//Task 6:
function pallindrome(str, i=0, j= str.length-1){
    if(i>= j){
        console.log("Pallindrome");
        return;
    } else if(str[i] !=str[j]){
           console.log("Not a pallindrome");
    }else {
        pallindrome(str, i+1, j-1);
    }
}

let str1 = 'eye';
pallindrome(str1);


//Activity 4:
//Task7:
function binarySearch(arr, target, left=0, right=arr.length-1){
    if(left<=right){
        let mid = Math.floor((left+ right)/2);

        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid] < target){
            return binarySearch(arr, target, left=mid+1, right);
        }
        else if(arr[mid]>target){
           return  binarySearch(arr, target, left, right= mid -1);
        } 
    }
    return -1; 
}

let fruits = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearch(fruits, 10));


//Task 8:
function occurrence(arr,target, i=0, count=0){

    if(i>= arr.length){
        return count;
    }
        if(arr[i] === target){
            count++;
        }   
    
        return occurrence(arr,target, i+1, count)
    
    
}

let numbers = [7,6,7,1,2,3,7,8];
console.log(occurrence(numbers, 7));


//Activity 5:
//Task 9
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function inorderTraversal(root, result = []) {
    if (root) {
      inorderTraversal(root.left, result);
      result.push(root.value);
      inorderTraversal(root.right, result);
    }
    return result;
  }
  

  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  
  console.log(inorderTraversal(root)); 

  //Task 10:
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function maxDepth(root) {
    if (root === null) {
      return 0;
    } else {
      let leftDepth = maxDepth(root.left);
      let rightDepth = maxDepth(root.right);
      return Math.max(leftDepth, rightDepth) + 1;
    }
  }
  
  
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  
  console.log(maxDepth(root)); 