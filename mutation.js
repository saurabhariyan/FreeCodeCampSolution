function mutation(arr) {
  var largerStr = arr[0].toLowerCase().split('').filter(function(value, index, self) {
   return self.indexOf(value) === index;
  });
  console.log(largerStr);
  var smallerStr = arr[1].toLowerCase().split('').filter(function(value, index, self) {
   return self.indexOf(value) === index;
  });
  console.log(smallerStr);
  if (largerStr.length < smallerStr.length){
    return false;
  }

  for(var index=0; index < smallerStr.length; index++ ){
    if(largerStr.indexOf(smallerStr[index]) == -1){
        console.log(smallerStr[index], largerStr);
      return false;
    }

  }
  return true;
}

mutation(["hello", "hey"]);
