
function rot13(str) { // LBH QVQ VG!
  var strarr = str.split("");
  var finalarr = [];
  for (var index = 0; index < strarr.length; index++) {
    if(strarr[index].match(/[^A-Z]/)){
      finalarr.push(strarr[index]);
      //console.log("non alpha: " + strarr[index]);
    }
    else if(strarr[index].match(/[A-M]/)) {
     finalarr.push(String.fromCharCode( strarr[index].charCodeAt(0) + 13));

    }
    else {
      finalarr.push(String.fromCharCode( strarr[index].charCodeAt(0) - 13));
      //console.log("alpha:  "+ strarr[index] + " " +  );
    }
  }

  //console.log(finalarr);

  return finalarr.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
