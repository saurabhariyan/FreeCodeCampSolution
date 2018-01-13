
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var keysSource = Object.keys(source)
  // Only change code below this line
  var lenOfE = 0
  console.log(Array.isArray(keysSource) , keysSource)
  for (var index = 0 ; index < collection.length ; index++ ){
    console.log
    for(var count = 0; count < keysSource.length; count++){
      if (collection[index].hasOwnProperty(keysSource[count]) ) {
        if(collection[index][keysSource[count]] === source[keysSource[count]] ){
          lenOfE++;
        }
      }
    }
      if(lenOfE == keysSource.length){
          arr.push(collection[index]);
      }

  }

  // Only change code above this line
  return arr;
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log( whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }))
//should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
