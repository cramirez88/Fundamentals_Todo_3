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


// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

// function evenOdds(arr){
//   let odds = 0
//   let evens = 0
//   for (let i = 0; i < arr.length; i++){
//    if (arr[i] % 2 !== 0){
//      odds++
//      evens = 0
//    }else {
//      evens++
//      odds = 0
//    }
//    if(odds === 3){
//     console.log('Thats so odd!')
//    }else if(evens === 3){
//      console.log('Even more so')
//    }else {
//      console.log('Oh whale')
//    }
//   }
  
// }

// console.log(evenOdds([1,2,3,4,5,7,1,11]))


// Increment the Seconds
// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

// function increment(arr){
//   for(let i = 0; i < arr.length; i++)
//   if (arr[i] % 2 !== 0){
//     arr[i] = arr[i] + 1
//   }
//   return arr
// }
// console.log(increment([1,3,5, 2]))


// Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

// function previousLength(arr){
//   for (let i = arr.length - 1; i > 0; i--){
//     arr[i] = arr[i - 1].length
//   }
//   return arr
  
// }

// console.log(previousLength(['Hi', 'Bob', 'Tree', 'Charlie']))


// Add Seven to Most
// Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

// function addSeven(arr){
//   let first = arr[0]
//   let newArr = [first]
//   for (let i = 1; i < arr.length; i++){

//     newArr.push(arr[i] + 7)
//   }
//   return newArr
// }

// console.log(addSeven([1,2,3,4,5]))


// Reverse Array
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

// function reverse(arr){
//   let newArr = []
//   for(let i = arr.length - 1; i >= 0; i--){
   
//     newArr.push(arr[i])
//   }
//   return newArr
// }

// console.log(reverse([1,3,4,3,7]))

// Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].


// function negative(arr){
//   let newArr = []
//   for( let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//       newArr.push(arr[i] * -1)
//     }else {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// console.log(negative([-1,-2,4,5,-6]))

// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

// function alwaysHungry(arr){
//   for (let i = 0; i < arr.length; i++){
//     if(arr[i] === 'food'){
//       console.log('Yummy')
//     }
//     if(arr[i] !== 'food'){
//       console.log('Hungry')
//       return
//     }
//   }
// }

// console.log(alwaysHungry(['food', 'hi', 'la', 'not food']))


// Swap Toward the Center
// Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

// function swap(arr){
//   let newArr = []
//   for (let i = arr.length -1; i >= 0; i--){
//     newArr.push(arr[i])
//   }
//   return newArr
// }

// console.log(swap([1,'hi', 'bacon', 'coding', 'dojo']))


// Scale the Array
// Given array arr and number num, multiply each arr value by num, and return the changed arr.

// function arrAndNum(arr, num){

//   let changedArr = []
//   for (let i = 0; i < arr.length; i++){
//     changedArr.push(arr[i] * num)
//   }

//   return changedArr
// }

// console.log(arrAndNum([1,2,4,2,5], 4))




