"use strict;";
/*Task 4,
Enter a positive number. Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ ... _ 3 _ 2 _ 1 , 0! = 1
)
   Input 5    Output  “5! = 120”;
   Input 1    Output   “1! = 1”;
   Input 7    Output  “7! = 5040”;
*/
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return `${num}! = ${result}`;
}
