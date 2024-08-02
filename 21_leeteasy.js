//Activity 1:
//Task 1:

let nums = [11,7,15,2];
let target = 9;

const sum = ((arr, target)=>{
     const map = new Map();
     for(let i =0; i<arr.length; i++){
           const pairtarget = target - arr[i];
           if(map.has(pairtarget)){
            return [i, map.get(pairtarget)]
           } else {
            map.set(arr[i], i)
           }
     }
})

console.log(sum(nums, target));

//Activity 2:
//Task 2:


let number = -128878987376;

function reverseInteger(num){
    let sign = 1;
    if(num < 0){
        sign = -1;
        num = -num;
    }
    if(num >= 0 && num<=9){
        return num * sign;
    }
   
    let reverseNum = 0;
    while(num!=0){
        let m = num % 10;
        reverseNum = reverseNum * 10 + m;
        num = Math.floor(num/10);
  
    }
    return reverseNum * sign;
}

console.log(reverseInteger(number));

//Activity 3:
//Task 3:

function pallindromeInteger(num){

    if(num < 0){
        console.log("Enter a number greater than 0, negative numbers are not pallindrome");
    }

    let rev = 0;
    let original = num;
    while(num > 0){
          let m = num % 10;
          rev = rev * 10 + m;
          num = Math.floor(num/10);
            }

            console.log(rev === original);
}

pallindromeInteger(6767676);
pallindromeInteger(6789);


//Activity 4:
//Task 4:
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
const mergeTwoLists = ((l1, l2)=>{
    let dummy = new ListNode(0);
    let current = dummy;

    while(l1 && l2){
        if(l1.val < l2.val){
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }

        current = current.next;
    }

    current.next = l1|| l2;
    return dummy.next;

})


  
  // Create l1: 1 -> 3 -> 5
  let l1 = new ListNode(1);
  l1.next = new ListNode(3);
  l1.next.next = new ListNode(5);
  
  // Create l2: 2 -> 4 -> 6
  let l2 = new ListNode(2);
  l2.next = new ListNode(4);
  l2.next.next = new ListNode(6);
  l2.next.next.next = new ListNode(7);
let result = mergeTwoLists(l1, l2);
while (result) {
    console.log(result.val);
    result = result.next;
  }
   

  //Activity 5:
  //Task 5:

  function validParenthesis(s){
    let stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for(let i =0; i<s.length; i++){
        let c = s[i];
        if(c === '(' || c === '[' || c === '{'){
            stack.push(c);
        } else if(c === ')' || c === ']' ||  c=== '}'){
            if(stack.length === 0 || stack.pop()!==map[c]){
                return false;
            }
        }
    }

    return stack.length === 0;
  }

  let parenthesis = '()[{}]';
  let parenthesis2 = '([)][{}]';
  console.log(validParenthesis(parenthesis));
  console.log(validParenthesis(parenthesis2));