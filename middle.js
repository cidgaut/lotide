//Instruction
//Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(arr) {
  let middleArray = [];
  //for (let i = 0; i < arr.length; i++){
  //For arrays with one or two elements, there is no middle. Return an empty array.
  if (arr.length <= 2) {
    middleArray = [];
  } else if (arr.length % 2 !== 0) {//For arrays with odd number of elements, an array containing a single middle element should be returned.
    middleArray = [arr[Math.floor(arr.length / 2)]];
  } else { //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    middleArray = [arr[arr.length / 2 - 1], arr[arr.length / 2]];
  }
  return middleArray;
};

module.exports = middle;