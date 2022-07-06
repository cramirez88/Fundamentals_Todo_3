// Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

// function makeBig(arr){
  
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//       arr[i] = 'Big'
//     }
//   }
//   return arr
// }
// console.log(makeBig([4,-2,-3,3,2]))

// Print Low, Return High
// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.


// function printLowReturnHigh(arr){
//   let lowArr = arr[0]
//   let highArr = arr[0]
  
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < lowArr){
//       lowArr = arr[i]
//       console.log(lowArr)
//     }
//     if(arr[i] > highArr){
//       highArr = arr[i]
//     }
//   }
//     return [highArr, lowArr]
// }

// console.log(printLowReturnHigh([1,2,3,2,5,3,-1,-50]))

// Print One, Return Another
// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.

// function printOneReturnAnother(arr){
//   for (let i = 0; i < arr.length; i++){
//     if(arr[i] === arr[arr.length -2]){
//       arr[i] = arr[arr.length - 2]
//       console.log(arr[i])
//     }
//     if(arr[i] % 2 !== 0){
//       return arr[i]
//     }
    
//   }

// }


// console.log(printOneReturnAnother([2,2,3,4,5,-1,-3,-5]))


// Double Vision
// Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

// function double(arr){
//   let doubleArr = []
//   for (let i = 0; i < arr.length; i++){
//     doubleArr.push(arr[i] * 2)
//   }
//   return doubleArr
// }

// console.log(double([1,2,100]))


// Count Positives
// Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

// function countPositives(arr){
//   let pos = 0
//   for (let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//       pos++
//     }
//     if(arr[i] === arr[arr.length - 1]){
//       arr[i] = pos
//     }
//   }
//   return arr
// }

// console.log(countPositives([1,2,3,-1,2,-44,-5]))
