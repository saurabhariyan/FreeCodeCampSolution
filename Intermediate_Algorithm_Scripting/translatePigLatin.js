
function translatePigLatin(str) {
  var volArray = ['a', 'e', 'i', 'o', 'u'];
  var strArray = str.split("");

  if(volArray.indexOf(strArray[0]) !== -1 ){
    strArray.push('w', 'a', 'y');
    return strArray.join("");
  }
  var index = 0;
  /*console.log( volArray.indexOf(strArray[index]) )//!== -1
  console.log( index) //<
  console.log( strArray.length);
  */while(volArray.indexOf(strArray[index]) == -1 && index < strArray.length){
  //  console.log(strArray[index]);
    strArray.push(strArray.shift());
    //console.log(strArray);
  }
  strArray.push('a', 'y');
  return strArray.join("");
}

console.log(translatePigLatin("consonant"));
