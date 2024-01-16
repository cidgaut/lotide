
//const assertEqual = require('../assertEqual')
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {

  it("Should be empty if the tail of an empty array", () => {
    assert.deepEqual(tail([]), 0);
  });

  it("Should be empty if only one element", () => {
    assert.deepEqual(tail(['test']), 0); 
  });

  /*it("returns ", () => {
    assert.strictEqual(tail([5,6,7]), 5); 
  });

  it("", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), 'Hello'); 
  });*/
});

// Test Case: Check the original array
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//const result = tail(words);
//assertEqual(result.join(', '), "Lighthouse, Labs"); // Use join to convert the array to a string

//assertEqual(tail(["test"]).length, 0); // tail of array with one element only should be empty
//assertEqual(tail([]).length, 0); // tail of an empty array should also be empty