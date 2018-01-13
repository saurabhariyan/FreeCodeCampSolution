//CodeWars.


function longestRepetition(s) {
  if(s){
    var sArray = s.split("");
    var countArray = [];
    var count = 1; //init with one counting the element with comparsion.
    for(var index = 0; index < s.length; index++){
     while(sArray[index] == sArray[index+1]){
      count++;
      index++;
     }
     countArray.push(count);
     count = 1; //reset the count for the next element

    }
    var max = Math.max(...countArray);
    sum = 0;

    for (var i = 0; i < countArray.indexOf(max); i++) {
    //Array.isIndexOf will return the first instance as mentioned in the assumptions
      sum += countArray[i]; //sum all the instance before the max value.
    }
    var maxElement = sArray[sum];
    return [maxElement, max];
  }
//reachable outside the if condition.
  return ["",0];
}
