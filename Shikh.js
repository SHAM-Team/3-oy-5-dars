// 1-misol

// function evenSum(array) {
// 	let newArray = []
// 	let sum = 0
// 	for (const element of array) {
// 		newArray.push(Math.abs(element))
// 		if (element % 2 == 0) sum += element * element
// 	}
// 	return `Yangi array: [${newArray}] va undagi juft sonlarning kvadratlari yigindisi: ${sum}`
// }

// console.log(evenSum([-1, 2, 3, 4, 5, -6]))

// 2-misol

// function checkTwoArr(array1, array2) {
// 	for (const element of array1) {
// 		if (array2.includes(element)) return false
// 	}
// 	return true
// }

// console.log(checkTwoArr([1, 2], [3, 4]))

// 3-misol

// function sortArray(array1, array2, str) {
// 	const resultArray = [...array1, ...array2]
// 	const increaseArray = resultArray.slice().sort((a, b) => a - b)
// 	const decreaseArray = resultArray.slice().sort((a, b) => b - a)
// 	const strArray = Array(resultArray.length).fill(str)
// 	return { increaseArray, decreaseArray, strArray }
// }

// console.log(sortArray([9, 5, 6, 7], [1, 2, 3, 4], 'salom'))

// 4-misol

// function numberSplit(number) {
// 	let result = []
// 	result.push(Math.floor(number / 2))
// 	result.push(Math.ceil(number / 2))
// 	return result
// }

// console.log(numberSplit(-9));

// 5-misol

// function sortByLength(array) {
// 	array = array.sort((a, b) => a.length - b.length)
// 	return array
// }

// console.log(sortByLength(['asz', 'qsdf', 'qw', 'a']))

// 6-misol

// function evenNumAndpow2(array) {
// 	let newArray = []
// 	newArray = array.slice().filter(n => n % 2 === 0)
// 	newArray = newArray.sort((a, b) => a - b)
// 	array = array.map(n => n * n)
// 	return { array, newArray }
// }
// console.log(evenNumAndpow2([2, 6, 3, 7, 8, 9, 4, 6]))

// 7-misol

// function reverseImage(array) {
// 	return [...array].reverse().map(row => [...row].reverse())
// }

// console.log(
// 	reverseImage([
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7, 8, 9],
// 	])
// )

// 8-misol

// function changeNumberToString(num1, num2) {
// 	const numbers = {
// 		0: 'zero',
// 		1: 'one',
// 		2: 'two',
// 		3: 'three',
// 		4: 'four',
// 		5: 'five',
// 		6: 'six',
// 		7: 'seven',
// 		8: 'eight',
// 		9: 'nine',
// 	}
// 	let array = []
// 	if (num1 < num2) {
// 		for (let i = num1; i <= num2; i++) {
// 			array.push(numbers[i])
// 		}
// 	} else {
// 		for (let i = num1; i >= num2; i--) {
// 			array.push(numbers[i])
// 		}
// 	}
// 	return array
// }

// console.log(changeNumberToString(1, 6))

// 9-misol

// function addToArray(number) {
// 	const array = []
// 	let temp = []
// 	for (let i = 1; i <= number; i++) {
// 		temp.push(i)
// 		if (temp.length === 3) {
// 			array.push(temp)
// 			temp = []
// 		}
// 	}
// 	if (temp.length > 0) {
// 		array.push(temp)
// 		return array
// 	}
// }

// console.log(addToArray(13))
