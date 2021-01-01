// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function getCharMap(string) {
  string = string.replace(/[^\w]/g, "").toLowerCase();
  const charMap = new Map();
  for (let char of string) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }
  return charMap;
}

function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    }
  }
  return true;
}

function anagrams(stringA, stringB) {
  return areMapsEqual(getCharMap(stringA), getCharMap(stringB));
}

module.exports = anagrams;
