"use strict";
/*Task 8 
  Enter a number. Reverse its first and last digits. Print the new number.
   Input 2  Output  2;
   Input 13     Output  31;
   Input 895796 Output  695798;
*/
function reverse(number) {
  let length = String(number).length - 1;
  let lastNum = number % 10;
  let firstNum = (number - (number % 10 ** length)) / 10 ** length;
  let Num = String(Math.floor((number % 10 ** length) / 10));
  return Number(lastNum + Num + firstNum);
}
