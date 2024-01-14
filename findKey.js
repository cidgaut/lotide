const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object1, callback) {
  //scan the object and return the first key which contains the given value
  let result = undefined;
  const keys = Object.keys(object1);

  //iterate over keys of the object, not the object itself
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (callback(object1[key])) {
      result = key;
      break; //no need to keep looking if result is already found
    }
  }
  return result;
};

const placesRating = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const result = findKey(placesRating, x => x.stars === 2);
assertEqual(result, "noma");

const result2 = findKey(placesRating, x => x.stars > 5);
assertEqual(result2, undefined);

const countries = {
  "Canada" : { languages : "English and French" },
  "U.S.A" :  { languages : "English and Spanish" },
  "Brazil" : { languages : "Portuguese" }
};

const result3 = findKey(countries, x => x.languages === "English and French");
assertEqual(result3, "Canada");

const result4 = findKey(countries, x => x.languages === "Latin");
assertEqual(result4, undefined);