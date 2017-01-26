/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */


var findLongestWord = function(string){
  var longestWord = ''
  var splitString = string.split(' ')
  var longestNumber = 0

  for(var i=0; i < splitString.length ; i++){
    var wordLength = splitString[i].length;
    if(splitString[i].includes("'") === true){
        wordLength = splitString[i].length -1;
    }

    if(wordLength > longestNumber){
      longestNumber = wordLength
      longestWord= splitString[i]
    }
}
return longestWord

}




console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
