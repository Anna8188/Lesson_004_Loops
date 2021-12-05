"use strict;";
/*Task 19
  Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array.
   Input [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]];    
   Output  [12, 1, 13, 15];
   Input [[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]];
   Output   [45, 8, 0, -6];
   Input [[1], [2], [3], [4]];   Output  [1, 2, 3, 4];
 */
function giveSum(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j];
    }
    newArr[i] = sum;
  }
  return newArr;
}
