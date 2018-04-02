// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 0; i < n; i++) {
    let step = "";
    for (let j = 0; j < n; j++) {
      step += j <= i ? "#" : " ";
    }
    console.log(step);
  }
}

// n = num rows

// #__
// ##_
// ###

// if n === row, done
// if n === column, print row of stairs
// if stair.length <= row we are on, print #, else ' '

function stepsRecursive(n, row = 0, stairs = "") {
  if (n === row) {
    return;
  }

  if (n === stairs.length) {
    console.log(stairs);
    stepsRecursive(n, row + 1);
    return;
  }

  if (stairs.length <= row) {
    stairs += "#";
  } else {
    stairs += " ";
  }
  stepsRecursive(n, row, stairs);
}

steps(2);

module.exports = stepsRecursive;
