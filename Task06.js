"use strict";
/*
Find the sign of product of three numbers without multiplication operator. Display the specified sign.

Input -14, 5, 0  Output “unsigned”
Input -8, 9, -6  Output "+"
Input  4, 19, -2 Output "-"
*/
function sign(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return "unsigned";
  } else if (a > 0 && b > 0 && c > 0) {
    return "+";
  } else if (a < 0 && b < 0 && c < 0) {
    return "-";
  } else if (a > 0 && b > 0 && c < 0) {
    return "-";
  } else if (a > 0 && b < 0 && c > 0) {
    return "-";
  } else if (a < 0 && b > 0 && c > 0) {
    return "-";
  } else if (a < 0 && b < 0 && c > 0) {
    return "+";
  } else if (a > 0 && b < 0 && c < 0) {
    return "+";
  } else if (a < 0 && b > 0 && c < 0) {
    return "+";
  }
}
