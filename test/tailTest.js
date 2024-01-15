
//requires assertEqual
//does the .. advise that the required file in in a previous folder?
const assertEqual = require('../assertEqual')
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result.join(', '), "Lighthouse, Labs"); // Use join to convert the array to a string

assertEqual(tail(["test"]).length, 0); // tail of array with one element only should be empty
assertEqual(tail([]).length, 0); // tail of an empty array should also be empty