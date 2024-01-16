const assert = require('chai').assert;
//const assertEqual = require('../assertEqual')
const head = require('../head');

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns '5' for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it("returns 'Hello' for '['Hello', 'Lighthouse', 'Labs']'", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });
});

// test cases commented out assertEqual as chai is an assertion library.
//Chai assertion functions are deliberately designed to play nice with testing frameworks like Mocha.
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");