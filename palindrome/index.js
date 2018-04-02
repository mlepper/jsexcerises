// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  if (!str) {
    return false;
  }
  const reversed = str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
  return reversed === str;
}

function palindrome2(str) {
  if (!str) {
    return false;
  }
  let i = Math.floor(str.length / 2);
  while (i >= 0) {
    if (str[i] === str[str.length - 1 - i]) {
      i--;
    } else {
      return false;
    }
  }
  return true;
}

function palindrome3(str) {
  if (!str) {
    return false;
  }

  // 2x as many passes here.
  return str.split("").every((val, i) => {
    return val === str[str.length - 1 - i];
  });
}

module.exports = palindrome3;
