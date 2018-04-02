// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let val = 0, outer = [];
    for (let r = 0; r < n; r++) {
        let inner = []
        for (let c = 0; c < n; c++) {
            val++;
            if (r % 2 === 0) {
                inner.push(val);
            } else {
                inner.push()
            }
        }
        outer.push(inner);
    }

    return outer;
}

console.log(matrix(4));
module.exports = matrix;
