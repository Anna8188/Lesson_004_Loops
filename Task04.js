"use strict";
/*Task 4
  Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
  21 “21 is a multiple of 3 and 7.”
  35 “35 is a multiple of 5 and 7.“
  13 “13 is not a multiple of 3, 5 or 7.”
  420 “420 is a multiple of 3, 5 and 7.”
  24 “24 is a multiple of 3.”
*/
function CheckNumber(num) {
  if (num % 3 == 0 && num % 5 == 0 && num % 7 == 0) {
    return `${num} is a multiple of 3, 5 and 7.`;
  } else if (num % 3 == 0 && num % 5 != 0 && num % 7 == 0) {
    return `${num} is a multiple of 3 and 7.`;
  } else if (num % 3 != 0 && num % 5 == 0 && num % 7 == 0) {
    return `${num} is a multiple of 5 and 7.`;
  } else if (num % 3 == 0 && num % 5 != 0 && num % 7 != 0) {
    return `${num} is a multiple of 3.`;
  } else {
    return `${num} is not a multiple of 3, 5 or 7.`;
  }
}
