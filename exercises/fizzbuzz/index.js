// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  Array(n)
    .fill(undefined)
    .map((_, i) =>
      (i + 1) % 15 === 0
        ? "fizzbuzz"
        : (i + 1) % 3 === 0
        ? "fizz"
        : (i + 1) % 5 === 0
        ? "buzz"
        : i + 1
    )
    .forEach(console.log);
}

module.exports = fizzBuzz;
