'use strict';

function randomizeArray(arr) {
  var st = new Date().getTime();
  var result = [];

  while (arr.length > 0) {
    var i = Math.floor(Math.random() * arr.length);
    result.push(arr[i]);
    arr.splice(i, 1);
  }
  console.log('spend time: ' + (new Date().getTime() - st) + 'ms');
  console.log('result:' , result);
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
randomizeArray(arr);
