const assertEqual = require('./assertEqual');

const tail = function(arr) {
  return arr.slice(1);
};

/*// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};*/

/*// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result.join(', '), "Lighthouse, Labs"); // Use join to convert the array to a string*/

module.exports = tail;