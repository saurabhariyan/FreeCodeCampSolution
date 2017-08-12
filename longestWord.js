
function findLongestWord(str) {
  var strArray = str.split(" ");
  var strLen = strArray.map(function(val) {
    return val.length;
  });

  return Math.max(...strLen);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
