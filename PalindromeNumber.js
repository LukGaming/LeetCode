/* Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left. */

var input = 121;
function palindromeNumber(number) {
  var newNumbers = [];
  var numberToString = number.toString();
  for (let i = numberToString.length - 1; i >= 0; i--) {
    newNumbers.push(numberToString[i]);
  }
  return newNumbers.toString().replaceAll(",", "") == number;
}
console.log(palindromeNumber(input));
