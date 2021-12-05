"use strict";
/*Task 1
  Given a number. Print “odd” if the number is odd and “even” if it is even.
   Input 125 Output “odd”;
   Input 35 Output “odd”;
   Input 20 Output “even”;
*/
function isEven(number) {
  if (number % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
