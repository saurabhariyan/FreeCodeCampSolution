
function convertToRoman(num) {

  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
    //looping over every element of the array
    while (num%decimal[i] < num) {
    //looping over the same number until it won't fit any more
      result += roman[i];
      //add the matching roman number
      num -= decimal[i];
      //remove the last decimal number.
    }
  }
  return result;
}
convertToRoman(36);
