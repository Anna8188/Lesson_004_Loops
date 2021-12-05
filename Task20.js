"use strict;";
/*Task 20.

Print the following pattern:
1
2 6
3 7 10
4 8 11 13
5 9 12 14 15
*/

let i = 1;
let Line1 = `${i}`;
let Line2 = `${i + 1} ${i + 5}`;
let Line3 = `${i + 2} ${i + 6} ${i + 9}`;
let Line4 = `${i + 3} ${i + 7} ${i + 10} ${i + 12}`;
let Line5 = `${i + 4} ${i + 8} ${i + 11} ${i + 13} ${i + 14};`;
console.log(`
${Line1}
${Line2}
${Line3}
${Line4}
${Line5}`);
