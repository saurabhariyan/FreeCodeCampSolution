
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var indexStart = str.length - target.length ;//- 1;
  if(str.substring(indexStart) == target){
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");
