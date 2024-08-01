//Activity 1:
//Task 1:
function bubbleSort(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }
  
  
  const arr = [5, 2, 8, 1, 3];
  console.log(bubbleSort(arr)); 


  //Task 2:
  function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }
  

  const b = [5, 2, 8, 1, 3];
  console.log(selectionSort(b)); 


  //Task 3:
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const less = [];
    const greater = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        less.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }
  
    return quickSort(less).concat(pivot, quickSort(greater));
  }
  
 
  const c = [5, 2, 8, 1, 3];
  console.log(quickSort(c));
  

  //Activity 2:
  //Task 4:
  function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; 
      }
    }
    return -1; 
  }
  
 
  const d = [5, 2, 8, 1, 3];
  const target = 2;
  const result = linearSearch(d, target);
  if (result !== -1) {
    console.log(`Target value ${target} found at index ${result}`);
  } else {
    console.log(`Target value ${target} not found`);
  }

  //Task 5:
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // return the index of the target value
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1; 
  }
  
 
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const target2 = 5;
  const result2 = binarySearch(arr2, target2);
  if (result !== -1) {
    console.log(`Target value ${target2} found at index ${result2}`);
  } else {
    console.log(`Target value ${target2} not found`);
  }



  //Activity 3:
  //Task 6:
  function countCharacterOccurrences(str) {
    const charCount = {};
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    return charCount;
  }
  

  const str = "hello world";
  const charCount = countCharacterOccurrences(str);
  
  console.log(charCount);
 

  //Task 7:
  function longestSubstringWithoutRepeatingCharacters(str) {
    let longestSubstring = "";
    let currentSubstring = "";
    let charIndexMap = {};
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (!charIndexMap[char]) {
        charIndexMap[char] = i;
        currentSubstring += char;
  
        if (currentSubstring.length > longestSubstring.length) {
          longestSubstring = currentSubstring;
        }
      } else {
        const prevIndex = charIndexMap[char];
        const substringStartIndex = prevIndex + 1;
  
        currentSubstring = str.substring(substringStartIndex, i);
        charIndexMap = {};
  
        for (let j = substringStartIndex; j < i; j++) {
          charIndexMap[str[j]] = j;
        }
  
        charIndexMap[char] = i;
        currentSubstring += char;
      }
    }
  
    return longestSubstring;
  }
  
  
  const str3 = "abcabcbb";
  const longestSubstring = longestSubstringWithoutRepeatingCharacters(str3);
  console.log(longestSubstring); 


  //Activity 4:
  //Task 8:
  function rotateArray(arr, k) {
    k = k % arr.length; // handle cases where k is greater than arr.length
    const rotatedArr = [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
    return rotatedArr;
  }
  

  const arr4 = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  const rotatedArr = rotateArray(arr4, k);
  console.log(rotatedArr); 


  //Tas 9:
  function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
  
    // Add any remaining elements from arr1 or arr2
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
  
    return result;
  }
  

  const m = [1, 3, 5, 7];
  const n = [2, 4, 6, 8];
  const mergedArr = mergeSortedArrays(m, n);
  console.log(mergedArr); 