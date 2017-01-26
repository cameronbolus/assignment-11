
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
 *
**/

// input = string
// output = boolean

var hasDoubleLetters = function(string){
  var doubleLetterFound = false
  for(var i = 0; i < string.length; i++){
    if(string[i].toLowerCase() === string[i + 1]){
      doubleLetterFound = true
    }
  }
  return doubleLetterFound
}

console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )
