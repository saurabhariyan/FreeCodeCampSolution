
function largestOfFour(arr) {
  // You can do this!
  var newarr = [];
  for (var index = 0; index<4; index++ ){
    newarr.push(Math.max(...arr[index]));
  }
  return newarr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
