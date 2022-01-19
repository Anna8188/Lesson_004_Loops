"use strict";
/*Task 11.
 Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder.
   Input 1233  Output  ‘Quotient is 2.ʼ;
   Input 5     Output  ‘Quotient is 2.';   
   Input 0     Output  ‘Cannot calculate.ʼ;
   Input 455   Output  ‘Remainder is 2.ʼ;
*/
function quotient(number) {
  let num = String(number);
  let sum = 0;
  let product = 1;
  for (let i = 0; i < num.length; i++) {
    sum = sum + Number(num[i]);
    product = product * num[i];
  }
  if (product === 0) {
    return `Cannot calculate.`;
  } else if (product % sum === 0) {
    return `Quotient is ${product / sum}`;
  } else {
    return `Remainder is ${product % sum}.`;
  }
}
