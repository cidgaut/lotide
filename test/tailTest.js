const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {

  it("Should be empty if the tail of an empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("Should be empty if only one element", () => {
    assert.deepEqual(tail(['test']), []);
  });

  it("Should return the tail of an array with multiple elements", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("Should not modify the original array", () => {
    const originalArray = [1, 2, 3];
    tail(originalArray);
    assert.deepEqual(originalArray, [1, 2, 3]);
  });
  
  it("Should return the last element if there are only two elements", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });
});