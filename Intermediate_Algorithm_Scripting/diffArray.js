/*Diff Two Arrays
Compare two arrays and
return a new array with any items only found in one of the two given arrays,
but not both. In other words, return the symmetric difference of the two arrays.

*/


function diffArray(arr1, arr2) {
  console.log("arr1: "+ arr1);
  console.log("arr2: "+ arr2);
  var newArr = [];
  // the elements which are present in both the arrays have to be removed
  // we just add all the elements in a single array
  // and remove all the repeated elements
  //Major Downside : if the element is repeated in the same array the test case would fail.
  newArr.push(...arr1);
  newArr.push(...arr2);
  var temp =[];
  console.log(newArr);
  for (var index = 0; index < newArr.length; index++){
    if(newArr.indexOf(newArr[index]) != index){
      temp.push(newArr[index])
    }
  }
  var returnArr = newArr.filter(function(word){
    return temp.indexOf(word) == -1;
  })
  return returnArr;
}

