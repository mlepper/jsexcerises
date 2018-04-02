// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function reverse2(str) {
  if (!str) return str;

  return str
    .split("")
    .reduce((acc, val) => [val, ...acc], "")
    .join("");
}

function reverse3(str) {
  if (!str) return str;

  return str
    .split("")
    .reduce((acc, val) => [val].concat(acc), "")
    .join("");
}

function reverse4(str) {
  if (!str) return str;

  const a = str.split("");
  let final = "";
  for (let i = a.length - 1; i >= 0; i--) {
    final += a[i];
  }
  return final;
}

function reverse5(str) {
  if (!str) return str;
  let val = "";
  for (let current of str) {
    val = current + val;
  }
  return val;
}

function reverse6(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

module.exports = reverse6;
