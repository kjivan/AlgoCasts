// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let i = 0;
  while (i < array.length) {
    chunked.push(array.slice(i, i + size));
    i += size;
  }
  return chunked;
}

// function chunk(array, size) {
//   let chunk = [];
//   let chunked = [];
//   for (let i = 0; i < array.length; i++) {
//     chunk.push(array[i]);
//     if (chunk.length === size || i === array.length - 1) {
//       chunked.push(chunk);
//       chunk = [];
//     }
//   }
//   return chunked;
// }

// function chunk(array, size) {
//   let res = [];
//   for (let i = 0; i < array.length; i++) {
//     if ((i + 1) % size === 0) {
//       res.push(array.slice(i + 1 - size, i + 1));
//     } else if (i === array.length - 1) {
//       res.push(array.slice(Math.floor(array.length / size) * size));
//     }
//   }
//   return res;
//
// }

// function chunk(array, size) {
//   return array.reduce((res, _, i, ar) => {
//     if ((i + 1) % size === 0) {
//       res.push(ar.slice(i + 1 - size, i + 1));
//     } else if (i === array.length - 1) {
//       res.push(array.slice(Math.floor(array.length / size) * size));
//     }
//     return res;
//   }, []);
// }

module.exports = chunk;
