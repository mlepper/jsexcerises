// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  var mapA = {},
    mapB = {};

  if (!stringA || !stringB) {
    return false;
  }

  // replace spaces and punctuation
  // \w matches alphanumeric, ^ == not
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

  if (stringA.length !== stringB.length) {
    return false;
  }

  for (let c of stringA) {
    mapA[c] = mapA[c] + 1 || 1;
  }

  for (let c of stringB) {
    mapB[c] = mapB[c] + 1 || 1;
  }

  for (let keyA in mapA) {
    if (mapA[keyA] !== mapB[keyA]) {
      return false;
    }
  }

  return true;
}

function anagrams2(stringA, stringB) {
  function clean(s) {
    return s
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  }

  return clean(stringA) === clean(stringB);
}

module.exports = anagrams2;
