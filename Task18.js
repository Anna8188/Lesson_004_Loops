"use strict";
/*Task 18.
Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a
new array where each element from that array is placed under the index of its value. Start from the
smallest value and end with the biggest one. If there are missing values, put in its places undefined.

   Input [4, 3, 0, 9]
   Output [0, undefined, undefined, 3, 4, undefined, undefined, undefined, undefined, 9];
   
   Input [26, 30, 19, 5];    
   Output [0, undefined, undefined, 3, 4, undefined, undefined, undefined, undefined, 9];

  /// undefined x 13 - means undefined 13 times.///
*/

function giveArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i]] = arr[i];
  }
  return newArr;
}
