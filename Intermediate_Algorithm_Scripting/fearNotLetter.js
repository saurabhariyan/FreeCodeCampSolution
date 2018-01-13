function fearNotLetter(str) {

  var alpha = [];
  var i = 0;
  while(str.charCodeAt(i) == str.charCodeAt(i+1) -1) {
    i++;

  }
  if (i < str.length){
    return String.fromCharCode(str.charCodeAt(i)+1);
  }

  return undefined;
}
fearNotLetter("abce") ;
