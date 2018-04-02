// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const num = Math.abs(n);
  const flip = parseInt(
    ("" + num)
      .split("")
      .reverse()
      .join(""),
    10
  );

  // this works
  //return num === n ? flip : -flip;

  // Math.sign return 1 or -1
  return Math.sign(n) * flip;
}

module.exports = reverseInt;
