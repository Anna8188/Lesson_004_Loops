"use strict";
/*Task 3
  Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
  the last digit of the inserted number is 0, number remains the same.
   Input 367  Output  736;
   Input 1002 Output  2100;
   Input 250  Output  250;
   Input 8    Output  8;
*/
function Change(number) {
  if (number % 10 == 0) {
    return number;
  } else {
    number = String(number);
    let lastNumber = number % 10;
    return (number = (lastNumber + number - lastNumber) / 10);
  }
}
