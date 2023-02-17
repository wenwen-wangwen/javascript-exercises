const reverseString = function(string) {
  /* Method 1: for loop with string methods* */
  // let stringReversed = '';
  // for (let i = 0; i < string.length; i++) {
  //   stringReversed += string.slice(string.length - 1 - i, string.length - i);
  // }
  // return stringReversed;

  let array = string.split('');
  array.reverse();
  return array.join('');
};

// Do not edit below this line
module.exports = reverseString;
