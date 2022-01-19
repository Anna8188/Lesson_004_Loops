"use strict";
/*Task 7 
  Insert a digit and a number. Check whether the digits contains in the number or not.
   Input 5, 2463  Output  “No”;
   Input 4, 6     Output  “No”;
   Input 8, 45689 Output  “Yes”;
*/
function match(digit, number) {
  let number = String(number);
  for (let i = 0; i < number.length; i++) {
    if (digit == number[i]) {
      return "Yes";
    }
  }
  return "No";
}
