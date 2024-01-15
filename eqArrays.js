//Instruction
//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
// cannot compare two arrays directly (arr1 === arr2 would be too easy lol)
const eqArrays = function(arr1, arr2) {
  // Check if the lengths of the arrays are the same
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  // Iterate through each element and compare
  for (let i = 0; i < arr1.length; i++) {
    // If elements are not equal, return false
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  // If all elements are equal, return true
  return true;
};

module.exports = eqArrays;
//test files in eqArraysTest.js