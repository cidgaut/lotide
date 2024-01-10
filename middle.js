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

//Instruction
//Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(arr){
  let middleArray = [];
  //for (let i = 0; i < arr.length; i++){
    //For arrays with one or two elements, there is no middle. Return an empty array.
  if (arr.length <= 2 ){
    middleArray = [];
  } else if (arr.length % 2 !== 0){//For arrays with odd number of elements, an array containing a single middle element should be returned.
    middleArray = [arr[Math.floor(arr.length / 2)]];
  } else { //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    middleArray = [arr[arr.length / 2 - 1], arr[arr.length / 2]];
  }
  return middleArray;
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]