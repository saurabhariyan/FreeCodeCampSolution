
function titleCase(str) {
  var firstsplit = str.toLowerCase().split(" ");
  var emptyArr = [];
  for (var count=0; count < firstsplit.length; count ++){
    var secondsplit = firstsplit[count].split("");
    newC = secondsplit[0].toUpperCase();
    secondsplit.shift();
    secondsplit.unshift(newC);
    emptyArr.push(secondsplit.join(""));
  }
  return emptyArr.join(" ");
}

titleCase("I'm a little tea pot");
