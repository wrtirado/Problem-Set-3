// A function that will take a word, or multipule words to check and see if it is a palindrome!

var palindromeCheck = prompt("Enter a word, see if it's a palindrome!!!").split(' ').join('').toLowerCase()

var reverseWord = ''
var reverse = function(palindromeCheck) {
  for (var i = palindromeCheck.length - 1; i >= 0; i--) {
    reverseWord += palindromeCheck[i]
  }
  return reverseWord
}

if (reverse(palindromeCheck) === palindromeCheck) {
  alert("That's a palindrome!!!")
} else {
  alert("that is not a palindrome. Refresh, and try again.")
}

// A function that will take a number, and return the same number, with dashes inbetween all adjacent odd numbers!

var number = prompt("Input any sized number, and we will add a '-' between all adjacent odd digits!").split(' ').join('')

var newNumber = ''
var dashInsert = function(number){
for(var i = 0; i < number.length; i++) {
  if((number[i] % 2) === 1 && (number[i+1] % 2 === 1)) {
      newNumber += number[i] + '-'
    }
    else {newNumber += number[i]}
  }
  return newNumber
}

dashInsert(number)
alert(newNumber)
