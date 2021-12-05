"use strict;";
/*Task 10
  Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak = ak-1 + ak-2)
   Input 0    Output  0;
   Input 2    Output   1;
   Input 10    Output  55;
   Input 20    Output   6765;
*/
function isPrime(number) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  let i = 2;
  while (i <= 20) {
    arr.push((arr[i] = arr[i - 2] + arr[i - 1]));
    i++;
  }
  return arr[number];
}
