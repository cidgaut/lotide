const letterPositions = function(sentence) {
  const results = {};
  
  //iterate throught the array
  for (let i = 0; i < sentence.length; i++) {

    //set value of letter
    const letter = sentence[i];

    //if there is a space continue
    if (letter === " ") {
      continue;
    }

    //if the letter is not already a key in results
    if (!results[letter]) {
      results[letter] = [];
    }

    //otherwise push placement into the array
    results[letter].push(i);
  }
  return results;
};

console.log(letterPositions("My first sentence"));

