const fibonacci = function(val) {
  const index = Number(val);
  if (index < 0) return 'OOPS';
  let a = 0;
  let b = 1;
  let sum;
  for (let i = -1; i < index - 1; i++) {
    sum = a + b;
    b = a;
    a = sum;
  }
  return sum;

};

// Do not edit below this line
module.exports = fibonacci;
