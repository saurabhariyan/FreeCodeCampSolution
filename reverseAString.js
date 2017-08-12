
function reverseString(str) {
  var strArray = str.split("");
  var newStr = strArray.reverse().join("");

  return newStr;
}

reverseString("hello");
