/*const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
    
  if (isEqual) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
    
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
};*/

const without = function(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]