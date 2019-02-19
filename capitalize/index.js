// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let capitalized = "";
  for (let word of str.split(" ")) {
    let cap = word.substring(0, 1).toUpperCase() + word.substring(1);
    capitalized += `${cap} `;
  }

  return capitalized.trim();
}

// overcomplicated
// function cap2(str) {
//   return str.replace(/(\w)+/g, (match, s) => {
//     var x = arguments;
//     return match[0].toUpperCase() + match.split("").slice(1).join("");
//   })
// }

// function cap3(str) {
//   return str.replace(/(\w)+/g, (match) => {
//     const m = match.split("");
//     return [m[0].toUpperCase(), ...match.slice(1)].join("");
//   })
// }

function cap4(str) {
  return str.replace(/(\w)+/g, match => {
    return match[0].toUpperCase() + match.substring(1);
  });
}

module.exports = cap4;
