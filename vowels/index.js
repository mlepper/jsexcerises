// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const map = {};
    for (let c of str.replace(' ', '').toLowerCase()) {
        if (map[c]) {
            map[c]++;
        } else {
            map[c] = 1;
        }
    }

    return (map['a'] || 0) + (map['e'] || 0) + (map['i'] || 0) + (map['o'] || 0) + (map['u'] || 0);
}

// console.log(vowels('Hi there!'));
// console.log(vowels('Why do you ask?'));

module.exports = vowels;
