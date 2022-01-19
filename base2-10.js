"use strict;";
/*Task 02,
  Convert base-2 number to base-10;

   Input 010      Output  2;
   Input 10010    Output  8;
   Input 0101011  Output  43;
*/
function base2To10(num) {
  let newNum = num.split("").reverse().join("");
  let sum = 0;
  for (let i = 0; i < newNum.length; i++) {
    if (newNum[i] === "1") {
      sum = sum + 2 ** i;
    }
  }
  return sum;
}
