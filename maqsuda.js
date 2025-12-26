//1-misol
// function calc(arr) {
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//  let num = arr[i];
//  if (num < 0) {
//  num = -num;
// }
// if (num % 2 === 0) {
//  sum += num * num;
//       }
//     }
// return sum;
//   }
// console.log(calc([-2, 3, -4, 5])); 

//2-misol
// function checkTwoArr(arr1, arr2) {
//  for (let i = 0; i < arr1.length; i++) {
//       if (!arr2.includes(arr1[i])) {
//         return false;
//     }
//     }
//     return true;
//   }
//   console.log(checkTwoArr([1,2,3,4],[0,6,1,2,3,4])); 
//   console.log(checkTwoArr([9,9,8],[8,9]));          
//   console.log(checkTwoArr([1,2,3,4],[2,3]));        
  
  //3-misol
//   function sortArray(arr1, arr2, str) {
//     let merged = [...arr1, ...arr2];
//     merged.sort((a, b) => a - b);
//     if (str) {
//     return merged.map(() => str);
//     }

//     return merged;
//   }
//   console.log(sortArray([1,10],[2,3,4]));
//   console.log(sortArray([1,10],[2,3,4],'nodejs'));

  //4-misol
//   function numberSplit(num) {
//     let left = Math.floor(num / 2);
//     let right = num - left;
//     return [left, right];
//   }
//   console.log(numberSplit(4));  
//   console.log(numberSplit(10));  
//   console.log(numberSplit(11)); 
//   console.log(numberSplit(-9));  
  
  //5-misol
//   function sortByLength(arr) {
//     return arr.sort((a, b) => a.length - b.length);
//   }
  
//   console.log(sortByLength(["a","ccc","dddd","bb"]));
//   console.log(sortByLength(["apple","pie","shortcake"]));

  //6-misol

//   function evenSortDouble(arr) {
//     let evenNumbers = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         evenNumbers.push(arr[i]);
//       }
//     }
//     evenNumbers.sort((a, b) => a - b);
//     for (let i = 0; i < evenNumbers.length; i++) {
//       evenNumbers[i] = evenNumbers[i] * 2;
//     }
  
//     return evenNumbers;
//   }
//   console.log(evenSortDouble([5, 2, 8, 1, 4]));

  //7-misol

//   function reverseImage(matrix) {
//     let result = [];
//     for (let i = matrix.length - 1; i >= 0; i--) {
//     let row = [];
//     for (let j = matrix[i].length - 1; j >= 0; j--) {
//     row.push(matrix[i][j]);
//     }
//       result.push(row);
//     }
//     return result;
//   }
//   console.log(reverseImage([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//   ]));
  
  //8-misol
//   function changeNumberToString(n) {
//     let words = ['one','two','three','four','five'];
//     let result = [];
//     for (let i = 0; i < n; i++) {
//       result.push(words[i]);
//     }
  
//     return result;
//   }
//   console.log(changeNumberToString(5));
//   console.log(changeNumberToString(5).reverse());
  
  //9-misol
//   function addToArray(n) {
//     let arr = [];
//     for (let i = 1; i <= n; i++) {
//       arr.push(i);
//     }
//     return arr;
//   }
//   console.log(addToArray(10));

  

  

  