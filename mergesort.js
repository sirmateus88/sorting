'use strict'
function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var splitPos = Math.floor(wholeArray.length / 2)
  var firstHalf = wholeArray.slice(0 , splitPos - 1);
  var secondHalf = wholeArray.slice(splitPos);
  return [firstHalf, secondHalf];
}
