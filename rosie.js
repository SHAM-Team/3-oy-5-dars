
//N1

// function nums(arr) {
//     let sum=0
//     for (let elem of arr) {
//         let numbers=Math.abs(elem)
//         if (numbers%2==0) {
//             sum+=numbers 
//         }
//     }
//     return sum
// }
// console.log(nums([-1,2,-3,4]));

//N2

// function checktwoarr(arr1,arr2) {
//      for (let i = 0; i < arr1.length; i++) {
//         let elem = arr1[i]
//         if (arr2.includes(elem) === true) {
//             return false
//         }
//      }
//     return true
// }
// console.log(checktwoarr([1,2],[4,3]));

//N3

// function sortArr(arr1,arr2,str) {
//     let narr=[]
//     for (let i = 0; i < arr1.length; i++) {
//         narr.push(arr1[i])
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         narr.push(arr2[i])        
//     }
//     let osish = [...narr].sort((a, b) => a - b)
//     let kamayish = [...narr].sort((a, b) => b - a)
//     let nstr = Array(narr.length).fill(str)

//     return {
//         osish: osish,
//         kamayish: kamayish,
//         satr: nstr
//     }
// }
// console.log(sortArr([1,6,2],[5,3,4,],'men'));

//N4



// function split(num) {
//     let a=Math.floor(num/2)
//     let b=num-a
//     return [a,b]
// }
// console.log(split(-9));


//N5

// function sortByLength(arr) {
//     let narr=[...arr].sort((a, b) => a.length - b.length)
//     return narr
// }
// console.log(sortByLength(["aaa","cc","bbbb","d"]));



//N6

// function named(arr) {
//     let newArr = []
//     let narr = [...arr].sort((a, b) => a - b)
//     for (let i = 0; i < narr.length; i++) {
//         newArr.push(narr[i] * 2)
//     }
//     return newArr
// }
// console.log(named([5, 3, 8]));

//N7

// function reverseImage(arr) {
//     let narr=[]
//     for (let i = arr.length-1; i >= 0; i--) {
//         let inArr=arr[i]
//         let revIn=[]
//         for (let j = inArr.length-1; j >= 0; j--) {
//             revIn.push(inArr[j])            
//         }
//         narr.push(revIn)
//     }
//     return narr
// }
// console.log(reverseImage([[1,2,3],[4,5,6],[7,8,9]]));

//N8

// function changeNumtoStr(a,b) {
//     let dict={
//         1: 'one',
//         2: 'two',
//         3: 'three',
//         4: 'four',
//         5: 'five',
//         6: 'six',
//         7: 'seven',
//         8: 'eight',
//         9: 'nine'
//     }
//     let arr=[]
//     for (let i = a; i <= b; i++) {
//         arr.push(dict[i])
//     }
//     return arr
// }
// console.log(changeNumtoStr(3,5));

//N9

// function addToArr(num) {
//     let arr=[]
//     let resArr=[]
//     for (let i = 1; i <= num; i++) {
//         arr.push(i)
//     }
//     for (let i = 0; i < arr.length; i+=3) {
//         let qism = arr.slice(i, i + 3)
//         resArr.push(qism)
//     }
//     return resArr
// }
// console.log(addToArr(15));
