'use strict'
function split(wholeArray) {
  var splitPos = Math.floor(wholeArray.length / 2)
  var firstHalf = wholeArray.slice(0 , splitPos);
  var secondHalf = wholeArray.slice(splitPos);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  var sortedArr = [];
  var arr1Copy = arr1.slice();
  var arr2Copy = arr2.slice();

  while (arr1Copy.length && arr2Copy.length){
    if (!arr1Copy.length){
      sortedArr = sortedArr.concat(arr2Copy);
      arr2Copy = [];
    } else if (!arr2Copy.length){
      sortedArr = sortedArr.concat(arr1Copy);
      arr1Copy = [];
    } else if (arr1Copy[0] < arr2Copy[0]){
      sortedArr.push(arr1Copy.shift());
    } else {
      sortedArr.push(arr2Copy.shift());
    }
  }
  return sortedArr;
}

