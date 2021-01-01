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

function steps(n, row = 0, stair = "") {
  if (row === n) {
    return;
  }

  if (stair.length === n) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}

// function stepsHelper(row, n) {
//   if (row === n) {
//     return;
//   } else {
//     console.log('#'.repeat(row+1) + ' '.repeat(n-(row+1)));
//     stepsHelper(row+1, n);
//   }
// }
//
// function steps(n) {
//   stepsHelper(0,n);
// }
// function steps(n) {
//   for(let row = 0; row < n; row++){
//     stair = '';
//     for (let column = 0; column < n; column++){
//       stair += column <= row ? '#' : ' ';
//     }
//     console.log(stair)
//   }
// }
// function steps(n) {
//   Array.from({ length: n }, (_, i) => i + 1).forEach((val, i, arr) =>
//     console.log("#".repeat(val) + " ".repeat(arr.length - val))
//   );
// }

module.exports = steps;
