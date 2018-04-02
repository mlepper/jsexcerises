// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const dict = {};

  for (let ch of str) {
    dict[ch] = dict[ch] + 1 || 1;
  }

  let max = 0,
    returnVal;
  // could use for in
  Object.keys(dict).forEach(key => {
    if (dict[key] > max) {
      max = dict[key];
      returnVal = key;
    }
  });

  return returnVal;
}

module.exports = maxChar;
