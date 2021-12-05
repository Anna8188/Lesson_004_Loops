"use strict";
s;
/*Task 2
  Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of
  the angles of a triangle equals 180 degrees).
   Input 45, 90 Output 45;
   Input 30, 30 Output 120;
   Input 75, 25 Output 80;
*/
function thirdAngle(firstAngle, secondAngle) {
  return 180 - (firstAngle + secondAngle);
}
