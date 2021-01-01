// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charToCount = {};

  for (let char of str) {
    charToCount[char] = charToCount[char] + 1 || 1;
  }

  let maxEntry;
  for (let entry of Object.entries(charToCount)) {
    if (!maxEntry) {
      maxEntry = entry;
    }
    maxEntry = entry[1] > maxEntry[1] ? entry : maxEntry;
  }

  return maxEntry[0];
}

// function maxChar(str) {
//   return getMaxCount(getCharToCount(str))[0];
// }
//
// const getCharToCount = (str) =>
//   Object.entries(
//     str
//       .split("")
//       .reduce(
//         (cToCount, c) => Object.assign(cToCount, { [c]: cToCount[c] + 1 || 1 }),
//         {}
//       )
//   );
//
// const getMaxCount = (charToCount) =>
//   charToCount.reduce((maxEntry, [key, count]) =>
//     count > maxEntry[1] ? [key, count] : maxEntry
//   );

module.exports = maxChar;
