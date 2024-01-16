const middle = require('../middle');
const assert = require('chai').assert;

//the purpose of this test code is to obtain the middle item in the array
describe("#middle", () => {

  it("Should return empty if there is only one number in array", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("Should return empty if there are only two number in array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("Should return the single middle value if the array is uneven", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("Should return the two middle values if the array is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});