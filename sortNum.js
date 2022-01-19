"use strict";
/*Task 5
  Given three numbers. Sort them by the ascending order.
   Input 45, 26, 78  Output  26, 45, 78;
   Input -23, -456, 0 Output -456, -23, 0;
*/

function sort(a, b, c) {
  if (a < b && b < c) {
    console.log(a, b, c);
  } else if (a < b && c < b) {
    console.log(a, c, b);
  } else if (b < a && a < c) {
    console.log(b, a, c);
  } else if (b < a && c < a) {
    console.log(b, c, a);
  } else if (c < a && a < b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}
