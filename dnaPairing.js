
/*
Base pairs are a pair of AT and CG. for the

input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

*/



function pairElement(str) {
  var returnArray = [];
  for (var i =0; i < str.length; i++) {
      var elem =[str[i]];
    switch(str[i]) {
      case "A":
        elem.push("T");
        break;
      case "T":

        elem.push("A");
        break;
      case "C":
        elem.push("G");
        break;
      case "G":
        elem.push("C");
        break;
    }
    returnArray.push(elem);
  }
  return returnArray;
}

console.log(pairElement("GCG"));


