"use strict";
/*Task 13.
  Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers in a separate array. Arrange them such as from the beginning are the odds and from the
  ending the evens.
  Input [8, 0, 1, ‘heyʼ, 12, 5 , true, ‘2ʼ, null, 7, 3]; Output [1, 5, 7, 3, 8, 0, 12];
  Input [8, 8, ‘mehʼ, 6]; Output [8, 8, 6];
  Input [null, null, 1, undefined, 5, 9, false]; Output [1, 5, 9];
*/
function giveNumbers(arr) {
  let newArr = arr.filter(function (val) {
    if (typeof val === "number") {
      return val;
    }
  });
  let i = 0;
  while (i < newArr.length) {
    if (newArr[i] / 10 >= 1) {
      let num = newArr[i];
      newArr[i] = newArr[newArr.length - 1];
      newArr[newArr.length - 1] = num;
    }
    i++;
  }
  return newArr;
}
