function assertArraysEqual(actual, expected) {
    const isEqual = eqArrays(actual, expected);
  
    if (isEqual) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
  
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
  
  assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
  
  assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
  assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

  //Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.