const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
///////////////////////////////////////////////////////

const findKeyByValue = function (object1,  value) {
  //scan the object and return the first key which contains the given value
  let result = undefined;
  const keys = Object.keys(object1);

  //iterate over keys of the object, not the object itself
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (object1[key] === value) {
      result = key;
      break; //no need to keep looking if result is already found
    }
  }
  return result;
};



///////////////////////////////////////////////////////

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);