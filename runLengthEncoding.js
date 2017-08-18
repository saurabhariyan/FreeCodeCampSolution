//CodeWars.

function encode(input) {
    console.log("encode input: "+ input);
    var inputArray = input.split("");
    console.log("encode inputArray: " + inputArray);
    var outputArray = []
    var count = 1;
    for (var index = 0; index < input.length; index++){
      /*if(/\d/.test(inputArray[index+1])){

      }*/
      console.log(index, count);
      if (inputArray[index] === inputArray[index+1]){
        count ++;
        console.log(inputArray[index]);
      }
      else{
        outputArray.push(count);
        count = 1;
        outputArray.push(inputArray[index]);
      }
    }
    var output = outputArray.join("");
    return output;


}

function decode(input) {
  var outputArray = []
  var inputArray = input.split("");

  for (var index = 0; index < input.length; index+=2){
    var count = parseInt(inputArray[index]);
    while (/\d/.test(inputArray[index + 1])){
      count = 10 * count + parseInt(inputArray[index + 1]) ;
      index++;
    }
    while(count--){
      outputArray.push(inputArray[index+1]);
    }
  }

  return outputArray.join("");

}




console.log (decode(encode('AAAAAAAAAAB'))); //'AAAAAAAAAAB'