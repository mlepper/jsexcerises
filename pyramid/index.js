// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'
//   pyramid(5)
//      '    #    '
//      '   ###   '
//      '  #####  '
//      ' ####### '
//      '#########'

function pyramid(n, row = 0, level = '') {
    // number of columns needed => 2n-1
    if (row === n) {
        return;
    }

    if (level.length >= (2 * n - 1)) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const mid = Math.floor((2 * n - 1) / 2);
    let ch = ' ';
    if (mid - row <= level.length && mid + row >= level.length) {
        ch = '#';
    }
    pyramid(n, row, level + ch);
}

//pyramid(5);

module.exports = pyramid;
