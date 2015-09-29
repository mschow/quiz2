'use strict';

function longestString(arr) {

var stringLength = 0;
var long;

for (var i=0; i < arr.length; i++){

    if(typeof arr[i] === 'string'){
      if(arr[i].length > stringLength){
        stringLength = arr[i].length;
        long = arr[i];
      }
    }
}

return long;

}

module.exports = longestString;
