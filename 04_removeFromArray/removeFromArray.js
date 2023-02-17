const removeFromArray = function(array, ...valuesToExclude) {
  let result = [];
  array.forEach(value => {
    if (!valuesToExclude.includes(value)) result.push(value);
  })
  return result;
};

removeFromArray([1,2,3,4],3,2);
// Do not edit below this line
module.exports = removeFromArray;


/* This method is problematic because after we remove 2 (index 1), the forEach method won't check 3 (used to be index 2, but since index 1 is removed it becomes index 1) because it is now index 1 and it would think index 1 is already checked */
// const removeFromArray = function(array, ...valuesToRemove) {
//   array.forEach(value => {
//     console.log(array);
//     console.log(value);
//     if (valuesToRemove.includes(value)) {
//       console.log("index: ", array.indexOf(value));
//       array.splice(array.indexOf(value), 1);
//       console.log(array);
//       console.log(`removed: ${value}`);
//     }
//   })
//   return array;

// };