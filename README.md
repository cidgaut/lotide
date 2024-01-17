# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @codenamecid/lotide`

**Require it:**

`const _ = require('@codenamecid/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertEqual)`: a console.assert like function
* `function2(head)`: a head function
* `function3(tail)`: a tail like function
* `function4(eqArrays)`:allows comparison of arrays
* `function5(assertArraysEqual)`: allows comparison of arrays
* `function6(without)`: remove unwanted items
* `function7(middle)`: take in an array and return the middle-most element(s) of the given array.
* `function8(countOnly)`: take in a collection of items and return counts for a specific subset of those items.
* `function9(countLetters)`:take in a sentence (as a string) and then return a count of each of the letters.
* `function10(letterPositions)`: return all the indices in the string where each character is found.
* `function11(findKeyByValue)`: takes object and a value. Returns the first key which contains the given value.
* `function12(eqObjects)`: allows comparison of objects.
* `function13(assertObjectsEqual)`: help us easily test functions that return objects.