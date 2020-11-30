// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   let reversed = "";
//
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//
//   return reversed;
// }

// function reverse(str) {
//   let array = str.split("");
//
//   for (let i = 0; i < array.length / 2; i++) {
//     [array[i], array[array.length - 1 - i]] = [
//       array[array.length - 1 - i],
//       array[i],
//     ];
//   }
//
//   return array.join("");
// }

module.exports = reverse;
