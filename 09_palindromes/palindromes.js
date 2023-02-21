const palindromes = function (str) {
  const sanitizedStr = str.toLowerCase().replaceAll(/[^a-z]/g, '');
  const reversed = sanitizedStr.split('').reverse().join('');
  return sanitizedStr === reversed;

};
palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
