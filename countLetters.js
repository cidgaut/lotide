const countLetters = function(str) {
  const results = {};

  //for the duration of the string
  for (const char of str) {

    //filter out spaces. Continue says don't do anything in the braces.
    if (char === " ") {
      continue;
    }

    //if the character does not already exist in object. create key for character and set value to one.
    if (!results[char]) {
      results[char] = 1;
    }

    //remaining path:the current character is not a space and already exists as a key in object, therefore add count to value of key letter
    results[char]++;
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));