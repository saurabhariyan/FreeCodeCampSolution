

function uniteUnique(arr) {
  console.log(...arguments);
  var returnArr = [];
  for (var i = 0; i < arguments.length; i++ ){
    returnArr.push(...arguments[i]);
  }
  for(i =0; i < returnArr.length; i++ ){
    //console.log(returnArr.indexOf(returnArr[i]), returnArr[i], i)
    if(returnArr.indexOf(returnArr[i]) != i){
      console.log(returnArr[i]);
      console.log(returnArr);
      returnArr.splice(i, 1);
      i--;
      console.log(returnArr);
    }
  }
  console.log(returnArr);
  return arr;
}

//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])