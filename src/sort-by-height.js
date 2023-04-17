const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const positive = arr.filter((element) => element !== -1);
  positive.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    arr[i] !== -1 ? (arr[i] = positive.shift()) : null;
  }
  return arr;
}

module.exports = {
  sortByHeight,
};
