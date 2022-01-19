"use strict;";
/*Task 01,
  Enter a number. Find the difference between its biggest and smallest digits.
   Input 5    Output  0;
   Input 152    Output  4;
   Input 4593653    Output  6;
*/
function n(number) {
  let arr = String(number).split("");
  return Math.max.apply(null, arr) - Math.min.apply(null, arr);
}
