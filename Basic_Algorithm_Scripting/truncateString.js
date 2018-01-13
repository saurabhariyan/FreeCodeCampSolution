
function truncateString(str, num) {
  // Clear out that junk in your trunk

  if(num >= str.length) {
    return str;
  }
  var newstr = "";


  if(num > 3){
    newstr = str.substring(0, num-3) + "...";
    }
  else{
    newstr = str.substring(0, num)+ "...";

  }
  return newstr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
