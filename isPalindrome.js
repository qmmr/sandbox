function isPalindrome(string) {
  string = string.toLowerCase()
  var charsArr = string.split('')
  var validCharsArr = 'abcdefghijklmnoprstuvwxyz'.split('')
  var filteredCharsArr = charsArr.reduce((accu, char) => {
    if (validCharsArr.indexOf(char) > -1) {
      accu.push(char)
    }
    return accu
  }, [])

  return filteredCharsArr.join('') === filteredCharsArr.reverse().join('')
}

console.log(isPalindrome('race car'))
console.log(isPalindrome("Madam I'm Adam"))
console.log(isPalindrome('Never odd or even'))
console.log(isPalindrome('A man, a plan, a canal - Panama'))
console.log(isPalindrome('hello'))
