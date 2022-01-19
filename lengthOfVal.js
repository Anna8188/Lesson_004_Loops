"use strict";
/*Task 15.
 Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of their lengths.
  
  Input [“anymore”, “raven”, “me”, “communicate”];  Output 13;
  
  Input [“wish”, “slightly”, “understand”, “longer”, “unexpected”, “heart”];Output 14;
  */
function SumMinMax(arr) {
  let Arr = [];
  let i = 0;
  while (i < arr.length) {
    Arr[i] = arr[i].length;
    i++;
  }
  return Math.min.apply(Math, Arr) + Math.max.apply(Math, Arr);
}
