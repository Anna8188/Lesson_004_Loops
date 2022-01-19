"use strict;";

/*Task 17
Given a sentence as a string. Split it according to space and comma and create an array consisting of
the words of the array. The last word should not contain the last . or ! .
Input “May the Force be with you.”;
Output[“May”, “the”, “Force”, “be”, “with”, “you”];
Input “Keep your friends close, but your
enemies closer.”;
Output [“Keep”, “your”, “friends”, “close”, “but”, “your”, “enemies”, “closer”];
*/
function giveWords(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "." || sentence[i] === "!" || sentence[i] === ",") {
      sentence = sentence.replace(sentence[i], "");
    }
  }
  return sentence.split(" ");
}
