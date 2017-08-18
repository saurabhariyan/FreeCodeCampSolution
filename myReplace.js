
function myReplace(str, before, after) {
  var strArray =  str.split(" ");
  //console.log(strArray);
  var replaceIndex = strArray.indexOf(before);
  //console.log(before, replaceIndex);
  if(before.split("")[0] !== before.split("")[0].toLowerCase()){
    var afterArray = after.split("");
    var firstLetter = afterArray.shift();
    afterArray.unshift(firstLetter.toUpperCase());
    //console.log(afterArray);
    replace = afterArray.join("");
    //console.log(replace);
  }
  else{
    replace = after
  }
  //console.log(strArray + "\n" + replaceIndex + "\n" + replaceIndex);
  strArray.splice(replaceIndex, 1, replace);
  return strArray.join(" ");
  //return str;
}

//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
