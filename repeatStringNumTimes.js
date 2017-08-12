
function repeatStringNumTimes(str, num) {
  // repeat after me
  var newstr = ""
  if (num > 0){
    while(num--){
      newstr += str;
    }
    return newstr;
  }
  return "";
}

repeatStringNumTimes("abc", 3);
