"use strict;";
/*Task 3,
  Takes two arrays and insert the second array in the middle of the first array. The first array always has two elements.
  
   Input   [1, 10], [2, 3, 4, 5, 6, 7, 8, 9];  
   Output  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   Input   [15, 150], [45, 75, 35];
   Output  [15, 45, 75, 35, 150];

   Input [[1, 2], [5, 6]], [[3, 4]];
   Output  [[1, 2], [3, 4], [5, 6]];
   
*/
function insert(arr1, arr2) {
  let newArr = [];
  newArr[0] = arr1[0];
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }
  newArr.push(arr1[1]);
  return newArr;
}
