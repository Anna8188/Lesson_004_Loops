"use strict;";
/*Task 16

Given an array of numbers and a number. Find the index of a first element which is equal to that number. If there is not such a number, that find the index of the first element which is the closest to it.

Input [21, -9, 15, 2116, -71, 33], -71; Output  4;
Input [ 36, -12, 47, -58, 148, -55, -19, 10], -56; Output 5;
Input [5, 46, 17, -2, 89, 0, 26 ] 36;    Output  1;
*/
function giveNumIndex(arr, num) {
  let newArr = [];
  let i = 0;
  while (i < arr.length) {
    newArr.push(Math.abs(arr[i] - num));
    i++;
  }
  let min = Math.min.apply(null, newArr);
  return newArr.indexOf(min);
}
