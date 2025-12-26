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

//N5

//N6

function named(arr) {
    let newArr = []
    let narr = [...arr].sort((a, b) => a - b)
    for (let i = 0; i < narr.length; i++) {
        newArr.push(narr[i] * 2)
    }
    return newArr
}
console.log(named([5, 3, 8]));

