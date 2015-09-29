'use strict';

function arraySum(arr) {

var totalSum = 0;

for(var i=0; i < arr.length; i++){
  if(Array.isArray(arr[i])){
    totalSum += arraySum(arr[i])
  } else {
    totalSum += arr[i];
  }
}

return totalSum;

}

module.exports = arraySum;
