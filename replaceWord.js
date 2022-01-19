"use strict";
/*Task 12
Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the
words from the array.

   Input “_, we have a _.” [“Houston”, “problem”] 
   Output  “Houston, we have a problem.”;

   Input “If at _ you donʼt _, try, try _.” [“first”, “succeed”, “again”]    
   Output  “If at first you donʼt succeed, try, try again.”

   Input “May the _ _ _ _.” [“Force”, “be”, “with”, “you”]; 
   Output “May the Force be with you.”;
*/
function ReplaceWords(sentence, words) {
  let arr = sentence.split("");
  let newText = "";
  for (let i = 0, index = 0; i < arr.length; i++) {
    if (arr[i] == "_") {
      arr[i] = words[index];
      index++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    newText = newText + arr[i];
  }
  return newText;
}
