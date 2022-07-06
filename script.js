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