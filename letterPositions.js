const assertArraysEqual = function(actual, expected) {
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
};

const letterPositions = function(sentence) {
  const results = {};
  
  //iterate throught the array
  for (let i = 0; i < sentence.length; i++) {

    //set value of letter
    const letter = sentence[i];

    //if there is a space continue
    if (letter === " ") {
      continue;
    }

    //if the letter is not already a key in results
    if (!results[letter]) {
      results[letter] = [];
    }

    //otherwise push placement into the array
    results[letter].push(i);
  }
  return results;
};

console.log(letterPositions("My first sentence"));

