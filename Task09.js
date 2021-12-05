"use strict";
/*Task 9
  Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.
   Input 401    Output  "Yes";
   Input 63    Output   "No";
*/
function isPrime(number) {
  if (number == 2) {
    return true;
  }
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      return "No";
    }
  }
  return "Yes";
}
