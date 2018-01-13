function destroyer(arr) {
  // Remove all the values
  var newarr = arguments[0];
  var removearr = [...arguments];
  removearr.shift();
  console.log(removearr);
  var finalArr = newarr.filter(function(word){
  return removearr.indexOf(word) == -1;
});



  return finalArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
