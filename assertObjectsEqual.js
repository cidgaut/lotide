const eqObjects = function(object1, object2) {
  let sameObjects = true;
  //first find key length for both comparing objects //PAE
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  //now we determine if they are of the same length. No need to iterate through the object if the length of keys are not the same.
  if (object1Keys.length !== object2Keys.length) {
    sameObjects = false;
    return sameObjects;
  }

  //since the keys are the same length we need to compare the keys and values
  for (let i = 0; i < object1Keys.length; i++) {
    //we need to keet track of the current key
    let currentKey1 = object1Keys[i];
    let currentKey2 = object2Keys[i];

    //do the current keys match?
    if (currentKey1 !== currentKey2) {
      sameObjects = false;
      break;
    }

    //do current values match?
    if (object1[currentKey1] !== object2[currentKey2]) {
      sameObjects = false;
      break;
    }

  }
  return sameObjects;
};
////////////////////////////
//assertArraysEqual for refence. change arrays for objects.
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  
  if (isEqual) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};