/* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5. */

var input1 = [];
var input2 = [1];

function MedianOfAnArrayOfNumbers(array1, array2) {
  var Media1 = 0;
  var Media2 = 0;
  var divisao1 = 0;
  var divisao2 = 0;
  if (array1.length != 0) {
    for (let i = 0; i < array1.length; i++) {
      Media1 += array1[i];
    }
  }
  if (array2.length != 0) {
    for (let j = 0; j < array2.length; j++) {
      Media2 += array2[j];
    }
  }

  if (Media1 === 0 || null) {
    divisao1 = 1;
  } else {
    divisao1 = array1.length;
  }
  if (Media2 === 0  || null) {
    divisao2 = 1;
  } else {
    divisao2 = array1.length;
  }
  console.log("Media1: " + Media1);
  console.log("divisao 1: " + divisao1);
  console.log("Media2: " + Media2);
    console.log("divisao 2: " + divisao2);
    console.log(Media2 / divisao2);
  return ((Media1 / divisao1) + (Media2 / divisao2)) / 2;
}
console.log(MedianOfAnArrayOfNumbers(input1, input2));
