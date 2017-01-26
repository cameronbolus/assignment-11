
// Ex-03 : maxOfArray()

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

// input = array
// output = number

var maxOfArray = function(arrOfNumbers){
  var outputHigh = 0
  for(var i = 0; i < arrOfNumbers.length; i ++){
    if(arrOfNumbers[i] > outputHigh){
      outputHigh = arrOfNumbers[i]
    }
  }
  return outputHigh
}


console.assert(maxOfArray([2,7,3,4,21,0]) === 21)
console.assert(maxOfArray([100,9,8,7,6,10]) === 100)
console.assert(maxOfArray([84,32,11,31,12,201]) === 201)
