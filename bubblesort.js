'use strict';

function bubbleSort(arr) {
  var sorted = false;
  var lastPos = arr.length - 1;
  while (!sorted){
    sorted = true;
    for (let i = 0; i < lastPos; i++){
      if (arr[i] > arr[i + 1]){
        swap(arr, i);
        sorted = false;
      }
    }
    lastPos--;
  }
  return arr;
}
function swap(arr, startPos){
  var holdVal = arr[startPos];
  arr[startPos] = arr[startPos + 1];
  arr[startPos + 1] = holdVal;
}
