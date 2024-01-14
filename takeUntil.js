const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



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

const takeUntil = function(array, callback) {
  const result = [];

  for (const item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertEqual(eqArrays(results1, [ 1, 2, 5, 7, 2 ]), true);
assertEqual(eqArrays(results2, ["I've", "been", "to", "Hollywood"]), true);
