'use strict'

function split(wholeArray) {
  var splitPos = Math.floor(wholeArray.length / 2)
  var firstHalf = wholeArray.slice(0, splitPos);
  var secondHalf = wholeArray.slice(splitPos);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  var sortedArr = [];
  var arr1Copy = arr1.slice();
  var arr2Copy = arr2.slice();
  while (arr1Copy.length || arr2Copy.length){
    if (!arr1Copy.length){
      return sortedArr.concat(arr2Copy);
    } else if (!arr2Copy.length){
      return sortedArr.concat(arr1Copy);
    } else if (arr1Copy[0] < arr2Copy[0]){
      sortedArr.push(arr1Copy.shift());
    } else {
      sortedArr.push(arr2Copy.shift());
    }
  }
  return sortedArr;
}

function mergeSort(arr){
  //call split until you get an array of single arrays
  //call merge on two of these arrays at a time until all merged together
  var holdArr = [];
  var singleArrs = split(arr);
  while (!singleArrCheck(singleArrs)){
    for (let i = 0; i < singleArrs.length; i++){
      if(singleArrs[i].length > 1){
        holdArr = split(singleArrs[i]);
        singleArrs.splice(i, 1, holdArr[0], holdArr[1]);
        i++;
      }
    }
  }

  var arrNext;
  while (singleArrs.length > 1){
    for (let k = 0; k < singleArrs.length; k++){
      if(singleArrs[k + 1]){
        arrNext = singleArrs.splice(k + 1, 1);
        singleArrs[k] = merge(singleArrs[k], arrNext[0]);
      }
    }
  }

  return singleArrs[0];
}

//helper function
function singleArrCheck(arr){
  var allSingle = true;
  arr.forEach(function(elem){
    if (elem.length > 1) allSingle = false;
  });
  return allSingle;
}
