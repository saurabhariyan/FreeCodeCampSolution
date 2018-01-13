/*Sum All Numbers in a Range
We'll pass you an array of two numbers.
Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.


*/

function sumAll(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var count = 0
  for (min; min<=max; min++){
    count += min;
  }
  return count;
}

sumAll([1, 4]);
