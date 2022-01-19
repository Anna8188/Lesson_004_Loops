"use strict";
/*Task 14.

Given an array of strings and numbers. Print the number of integers and the number of strings in the
array.
  
  Input [1, ‘10ʼ, ‘hiʼ, 2, 3];
  Output [“Numbers: 3, Strings: 2”];
  
  Input [1, 4, ‘i am a stringʼ, ‘456ʼ]; 
  Output “Numbers: 2, Strings: 2”;
*/
function TypeOf(arr) {
  let Numbers = 0;
  let Strings = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      Numbers = Numbers + 1;
    } else {
      Strings = Strings + 1;
    }
  }
  return `Numbers:${Numbers}, Strings:${Strings}`;
}
