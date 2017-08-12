function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newarr = [];
  count = 0;
  for (var counter = 0; counter < (arr.length/size); counter++ ) {
    newarr.push(arr.slice(count, count + size));
    count+= size;

  }return newarr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


